import React from 'react';

function Tuner ({makeNoise, pitchNote, pitchScale, detune, pitch}) {
  return (
    <div className='tuner'>
      <div>TUNE-IT</div>
      <div className='makeNoise'>
        {makeNoise ? 'Make some noooise...' : null}
      </div>
      <div className='details'>
        <div className='notedetails'>
          <p>{pitchNote}</p>
          <p>{pitchScale}</p>
        </div>
        <div>
          <div className='detune' detune={detune}> detune: {detune} %</div>
          <div className='pitch'>{pitch} Hz</div>
        </div>
      </div>
    </div>
  );
}

export default Tuner;