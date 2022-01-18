import React from 'react';
import { Container } from 'react-bootstrap';
import Tuner from './Tuner';
import StartStop from './StartStop';
import SelectStdFreq from './SelectStdFreq';
import SelectMeter from './SelectMeter';

function TuningPanel ({makeNoise, pitchNote, pitchScale, pitch, detune, meter, started, startStop, refFreq, handleSliderChange, handleInputChange, handleBlur, switchMeter}) {
  return (
    <div className='panel'>
      <Tuner makeNoise={makeNoise} pitchNote={pitchNote} pitchScale={pitchScale} pitch={pitch} detune={detune} meter={meter} started={started}></Tuner>
      <Container className='controls'>
        <StartStop started={started} onClick={startStop}></StartStop>
        <SelectStdFreq refFreq={refFreq} rangeChange={handleSliderChange, handleInputChange} inputChange={handleInputChange} onBlur={handleBlur}></SelectStdFreq>
        <SelectMeter meter={meter} onClick={switchMeter}></SelectMeter>
      </Container>
    </div>
  );
}

export default TuningPanel;