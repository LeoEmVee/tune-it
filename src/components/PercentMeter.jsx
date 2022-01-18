import React from 'react';
import GaugeChart from 'react-gauge-chart';

function PercentMeter ({ detune }) {
  const meterSize = {
    height: 195,
  };
  const arcColor = () => {
    if (detune < 7 && detune > -7) return ['green'];
    if (detune < 14 && detune > -14) return ['green', 'green', 'red', 'red', 'red', 'green', 'green'];
    if (detune < 33 && detune > -33) return ['green', 'red', 'red', 'red', 'red', 'red', 'green'];
    return ['red'];
  };
  
  return (
    <div className='percentMeter'>
      <GaugeChart id="gauge-chart1"
        style={meterSize}
        marginInPercent={0.02}
        cornerRadius={6}
        nrOfLevels={7}
        percent={detune / 100 || 0}
        arcPadding={0.05}
        arcWidth={0.3}
        colors={arcColor()}
        textColor='black'
        needleColor='rgb(242, 242, 242)'
        needleBaseColor='rgb(242, 242, 242)'
        hideText={false}
        animate={false}
        animDelay={500}
        animateDuration={3000}
        formatTextValue={(detune) => detune + '%'}
      />
    </div>
  );
}

export default PercentMeter;