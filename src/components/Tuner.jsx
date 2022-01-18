import React from 'react';
import PercentMeter from './PercentMeter';
import NeedleMeter from './NeedleMeter';
import NoteMeter from './NoteMeter';
import { Container } from 'react-bootstrap';

function Tuner ({makeNoise, pitchNote, pitchScale, detune, pitch, meter, started}) {
  return (
    <Container className='tuner'>
      <div>
        <header className='logo'>
          <div>TUNE-IT!</div>
        </header>
        <div className='details'>
          <div>Pitch note: {pitchNote}</div>
          <div>Pitch scale: {pitchScale}</div>
          <div className='detune' detune={detune}> Detune: {detune} %</div>
          <div className='pitch'>Frequency: {pitch} Hz</div>
          <div className='message'>{makeNoise ? <div className='noise'>Make some noooise...</div> : <div className='noNoise'>No noise</div>}</div>
        </div>
        <div className='meter'>
          {
            meter === 'percent' ? <PercentMeter detune={detune} pitchNote={pitchNote} pitchScale={pitchScale}></PercentMeter> : meter === 'needle' ? <NeedleMeter started={started} detune={detune} pitchNote={pitchNote} pitchScale={pitchScale}></NeedleMeter> : <NoteMeter pitchNote={pitchNote} detune={detune}></NoteMeter>
          }
        </div>
      </div>
    </Container>
  );
}

export default Tuner;