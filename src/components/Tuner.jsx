import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';


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
      <ReactSpeedometer
        maxValue={50}
        minValue={-50}
        value={detune}
        currentValueText={`${pitchNote}`}
        needleColor="red"
        startColor="green"
        segments={50}
        maxSegmentLabels={4}
        endColor="blue"
        textColor="grey">
      </ReactSpeedometer>
    </div>
  );
}

export default Tuner;