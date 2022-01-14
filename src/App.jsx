import React, { useEffect, useState } from 'react';
import AudioContext from './utils/audio-context';
import autoCorrelate from './utils/auto-correlation-function';
import soundAnalyzer from './utils/sound-values';
import StartStop from './components/StartStop';
import Tuner from './components/Tuner';

const audioCtx = AudioContext.getAudioContext();
const analyser = AudioContext.getAnalyser();
const bufferLength = 2048;
const buffer = new Float32Array(bufferLength);

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function App () {
  const [source, setSource] = useState(null);
  const [started, setStart] = useState(false);
  const [pitchNote, setPitchNote] = useState('pitch note // ');
  const [pitchScale, setPitchScale] = useState('scale');
  const [pitch, setPitch] = useState('0');
  const [detune, setDetune] = useState('0');
  const [makeNoise, setMakeNoise] = useState(false);

  const updatePitch = () => {
    analyser.getFloatTimeDomainData(buffer);
    const ac = autoCorrelate(buffer, audioCtx.sampleRate);
    if (ac > -1) {
      let midiNote = soundAnalyzer.getMidiNote(ac);
      let noteSymbol = notes[midiNote % 12];
      let scale = Math.floor(midiNote / 12) - 1;
      let detune = soundAnalyzer.getOutOfPitch(ac, midiNote);
      
      setPitch(parseFloat(ac).toFixed(2));
      setPitchNote(noteSymbol);
      setPitchScale(scale);
      setDetune(detune);
      setMakeNoise(false);
      console.log(midiNote, noteSymbol, scale, detune, ac);
    }
  };

  useEffect(() => {
    if (source != null) source.connect(analyser);
  }, [source]);

  setInterval(updatePitch, 1);

  const startRec = async () => {
    const input = await getSound();

    if (audioCtx.state === 'suspended') await audioCtx.resume();
    setStart(true);
    setMakeNoise(true);
    setTimeout(() => setMakeNoise(false), 5000);
    setSource(audioCtx.createMediaStreamSource(input));
  };

  const stopRec = () => {
    source.disconnect(analyser);
    setStart(false);
  };

  const startStop = () => {
    return started ? stopRec() : startRec();
  };

  const getSound = () => {
    return navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        autoGainControl: false,
        noiseSuppression: true,
        latency: 0,
      },
    });
  };
  
  return (
    <div className='display'>
      <Tuner makeNoise={makeNoise} pitchNote={pitchNote} pitchScale={pitchScale} pitch={pitch} detune={soundAnalyzer.getDetune(detune)}></Tuner>
      <StartStop started={started} onClick={startStop}></StartStop>
    </div>
  );
}

export default App;