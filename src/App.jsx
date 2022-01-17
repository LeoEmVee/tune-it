import React, { useEffect, useState } from 'react';
import AudioContext from './utils/audio-context';
import autoCorrelate from './utils/auto-correlation-function';
import soundAnalyzer from './utils/sound-values';
import StartStop from './components/StartStop';
import Tuner from './components/Tuner';
import SelectMeter from './components/SelectMeter';
import SelectStdFreq from './components/SelectStdFreq';
import NavBar from './components/NavBar';

const audioCtx = AudioContext.getAudioContext();
const analyser = AudioContext.getAnalyser();
const bufferLength = 2048;
const buffer = new Float32Array(bufferLength);
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

function App () {
  const [source, setSource] = useState(null);
  const [started, setStart] = useState(false);
  const [pitchNote, setPitchNote] = useState('-');
  const [pitchScale, setPitchScale] = useState('-');
  const [pitch, setPitch] = useState('-');
  const [detune, setDetune] = useState('0');
  const [makeNoise, setMakeNoise] = useState(false);
  const [meter, setMeter] = useState('percent');
  const [refFreq, setRefFreq] = useState(440);
  
  const updatePitch = () => {
    analyser.getFloatTimeDomainData(buffer);
    const ac = autoCorrelate(buffer, audioCtx.sampleRate);
    if (ac > -1) {
      let midiNote = soundAnalyzer.getMidiNote(refFreq, ac);
      let noteSymbol = notes[midiNote % 12];
      let scale = Math.floor(midiNote / 12) - 1;
      let detune = soundAnalyzer.getOutOfPitch(refFreq, ac, midiNote);
      
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
    setPitchNote('-');
    setPitchScale('-');
    setDetune('0');
    setPitch('-');
  };

  const startStop = () => {
    return started ? stopRec() : startRec();
  };

  const getSound = () => {
    return navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        autoGainControl: false,
        noiseSuppression: false,
        latency: 0,
      },
    });
  };
  
  const handleSliderChange = (event, newValue) => {
    setRefFreq(newValue);
  };

  const handleInputChange = (event) => {
    setRefFreq(event.target.value === 0 ? 0 : event.target.value);
  };

  const handleBlur = () => {
    if (refFreq < 400) {
      setRefFreq(400);
      window.alert('Tune frequency must be between 400 and 509 (Hz)');
    } else if (refFreq > 509) {
      setRefFreq(509);
      window.alert('Tune frequency must be between 400 and 509 (Hz)');
    }
  };

  const switchMeter = () => {
    if (meter === 'percent') return setMeter('needle');
    if (meter === 'needle') return setMeter('note');
    if (meter === 'note') return setMeter('percent');
  };
  
  return (
    <>
      <NavBar></NavBar>
      <div className='panel'>
        <Tuner makeNoise={makeNoise} pitchNote={pitchNote} pitchScale={pitchScale} pitch={pitch} detune={detune} meter={meter} started={started}></Tuner>
        <div className='controls'>
          <StartStop started={started} onClick={startStop}></StartStop>
          <SelectStdFreq refFreq={refFreq} rangeChange={handleSliderChange, handleInputChange} inputChange={handleInputChange} onBlur={handleBlur}></SelectStdFreq>
          <SelectMeter meter={meter} onClick={switchMeter}></SelectMeter>
        </div>
      </div>
    </>
  );
}

export default App;