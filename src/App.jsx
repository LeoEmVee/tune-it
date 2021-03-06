import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AudioContext from './utils/audio-context';
import autoCorrelate from './utils/auto-correlation-function';
import soundAnalyzer from './utils/sound-values';
import Instructions from './components/Instructions';
import TuningPanel from './components/TuningPanel';


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
    }
  };

  useEffect(() => {
    if (source != null) source.connect(analyser);
  }, [source]);

  const startRec = async () => {
    const input = await getSound();
    setInterval(updatePitch, 100);

    if (audioCtx.state === 'suspended') await audioCtx.resume();
    setStart(true);
    setMakeNoise(true);
    setTimeout(() => setMakeNoise(false), 5000);
    setSource(audioCtx.createMediaStreamSource(input));
  };

  const stopRec = () => {
    source.disconnect(analyser);
    setPitchNote('-');
    setPitchScale('-');
    setDetune('0');
    setPitch('-');
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
      <nav className='navbar'>
        <Link to="/" className='logo navlogo'>TUNE-IT!</Link>
        <Link to="/instructions" className='instructions navlogo'>Instructions</Link>
      </nav>
      <Routes>
        <Route path='/' element={<TuningPanel makeNoise={makeNoise} pitchNote={pitchNote} pitchScale={pitchScale} pitch={pitch} detune={detune} meter={meter} started={started} refFreq={refFreq} handleSliderChange={handleSliderChange} handleInputChange={handleInputChange} handleBlur={handleBlur} switchMeter={switchMeter} startStop={startStop}/>}></Route>
        <Route path='instructions' element={<Instructions></Instructions>}></Route>
      </Routes>
    </>
  );
}

export default App;