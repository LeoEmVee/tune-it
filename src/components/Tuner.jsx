import React from 'react';
import GaugeChart from 'react-gauge-chart';

function Tuner ({makeNoise, pitchNote, pitchScale, detune, pitch}) {
  const meterSize = {
    height: 200,
  };
  const arcColor = () => detune < 10 && detune > -10 ? ['green'] : ['red'];
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
    </div>
  );
}
export default Tuner;