import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import GaugeChart from 'react-gauge-chart';



function Tuner ({makeNoise, pitchNote, pitchScale, detune, pitch}) {
  return (
    <div className='tuner'>
      <div>TUNE-IT</div>
      <div className='makeNoise'>
        {makeNoise ? 'Make some noooise...' : null}
      </div>
      <div className='details'>
        <div className='notedetails'>
          <div>Pitch note: {pitchNote}</div>
          <div>Pitch scale: {pitchScale}</div>
        </div>
        <div>
          <div className='detune' detune={detune}> detune: {detune} %</div>
          <div className='pitch'>{pitch} Hz</div>
        </div>
      </div>
      <div className='meter'>
        <GaugeChart id="gauge-chart2"
          nrOfLevels={20}
          percent={detune / 100}
        />
        <ReactSpeedometer
          ringWidth={50}
          maxValue={50}
          minValue={-50}
          needleHeightRatio={0.8}
          value={detune}
          currentValueText={`${pitchNote} - ${pitchScale}`}
          needleColor="darkred"
          needleTransition='ease'
          needleTransitionDuration={1500}
          segments={100}
          segmentColors={['red', 'green', 'red']}
          maxSegmentLabels={4}
          textColor="lightgrey"
          paddingHorizontal={10}
          paddingVertical={10}>
        </ReactSpeedometer>
      </div>
    </div>
  );
}

export default Tuner;