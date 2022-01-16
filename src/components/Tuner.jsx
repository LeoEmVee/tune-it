import React from 'react';
import PercentMeter from './PercentMeter';
import NeedleMeter from './NeedleMeter';

function Tuner ({makeNoise, pitchNote, pitchScale, detune, pitch}) {
  return (
    <div className='tuner'>
      <header className='logo'>
        <div>TUNE-IT!</div>
      </header>
      <div className='details'>
        <div className='notedetails'>
          <div>Pitch note: {pitchNote}</div>
          <div>Pitch scale: {pitchScale}</div>
        </div>
        <div>
          <div className='detune' detune={detune}> detune: {detune} %</div>
          <div className='pitch'>{pitch} Hz</div>
          <div className='makeNoise'>{makeNoise ? 'Make some noooise...' : <div className='noMessage'>|</div>}</div>
        </div>
      </div>
      <div className='meter'>
        <PercentMeter detune={detune}></PercentMeter>
        <NeedleMeter detune={detune} pitchNote={pitchNote} pitchScale={pitchScale}></NeedleMeter>
      </div>
    </div>
  );
}

export default Tuner;