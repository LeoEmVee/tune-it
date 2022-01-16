import React from 'react';
import GaugeChart from 'react-gauge-chart';

function PercentMeter ({ detune }) {
  const meterSize = {
    height: 200,
  };
  const arcColor = () => detune < 10 && detune > -10 ? ['green'] : ['red'];
  return (
    <div className='PercentMeter'>
      <GaugeChart id="gauge-chart2"
        style={meterSize}
        nrOfLevels={1}
        percent={detune / 100 || 0}
        textColor='black'
        marginInPercent={0.02}
        needleBaseColor='#FFFFFFFF'
        needleColor='#FFFFFFFF'
        colors={arcColor()}
        formatTextValue={detune => detune + '%'}
      />
    </div>
  );
}

export default PercentMeter;