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
      <div className='meter'>
        <ReactSpeedometer
          ringWidth={80}
          width={600}
          maxValue={50}
          minValue={-50}
          needleHeightRatio={0.7}
          value={detune}
          currentValueText={`${pitchNote}`}
          needleColor="darkred"
          needleTransition='ease'
          needleTransitionDuration={1000}
          segmentColors={['red', 'gold', '#138808', 'gold', 'red']}
          segments={5}
          maxSegmentLabels={8}
          textColor="lightgrey"
          customSegmentLabels={[
            {
              text: 'Not even close',
              position: 'INSIDE',
              fontSize: '50%'
            },
            {
              text: 'Just a bit more tuning',
              position: 'INSIDE',
              fontSize: '50%'
            },
            {
              text: 'Just a bit more tuning',
              position: 'INSIDE',
              fontSize: '50%'
            },
            {
              text: 'Just a bit more tuning',
              position: 'INSIDE',
              fontSize: '50%'
            },
            {
              text: 'Just a bit more tuning',
              position: 'INSIDE',
              fontSize: '50%'
            }]}>
        </ReactSpeedometer>
      </div>
    </div>
  );
}

export default Tuner;