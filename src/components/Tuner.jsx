import React from 'react';
import PercentMeter from './PercentMeter';
import NeedleMeter from './NeedleMeter';
import NoteMeter from './NoteMeter';

function Tuner ({makeNoise, pitchNote, pitchScale, detune, pitch, meter}) {
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
          <div className='message'>{makeNoise ? <div className='noise'>Make some noooise...</div> : <div className='noNoise'>No noise</div>}</div>
        </div>
      </div>
      <div className='meter'>
        {
          meter === 'percent' ? <PercentMeter detune={detune}></PercentMeter> : meter === 'needle' ? <NeedleMeter detune={detune} pitchNote={pitchNote} pitchScale={pitchScale}></NeedleMeter> : <NoteMeter pitchNote={pitchNote}></NoteMeter>
        }
      </div>
    </div>
  );
}

export default Tuner;