import React from 'react';
import GaugeChart from 'react-gauge-chart';

function PercentMeter ({ detune }) {
  const meterSize = {
    height: 200,
  };
  const arcColor = () => {
    if (detune < 7 && detune > -7) {
      return ['green'];
    }
    if (detune < 33 && detune > -33) {
      return ['green', 'red', 'red', 'red', 'green'];
    }
    return ['red'];
    
  };
  return (
    <div className='percentMeter'>
      <GaugeChart id="gauge-chart2"
        style={meterSize}
        nrOfLevels={5}
        percent={detune / 100 || 0}
        textColor='black'
        marginInPercent={0.02}
        arcWidth={0.3}
        needleBaseColor='lightgray'
        needleColor='lightgray'
        colors={arcColor()}
        formatTextValue={detune => detune + '%'}
      />
    </div>
  );
}

export default PercentMeter;