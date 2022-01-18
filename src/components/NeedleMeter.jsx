import React from 'react';
import GaugeChart from 'react-gauge-chart';

function NeedleMeter ({ detune, started, pitchNote, pitchScale }) {
  const meterSize = {
    height: 200,
  };
  const arcColor = () => {
    if (detune < 7 && detune > -7) return 'green';
    if (detune < 14 && detune > -14) return 'darkgreen';
    if (detune < 33 && detune > -33) return '#666600';
    return 'darkred';
  };
  
  const needlePos = (detune) => {
    if (started) return detune / 100 >= 0 ? 0.5 + detune / 100 : 0.5 + detune / 100;
    else return 0.5;
  };

  const tuned = {color: 'green'};
  const green = {color: 'darkgreen'};
  const darkred = {color: '#666600'};
  const red = {color: 'darkred'};
  
  return (
    <div className='needleMeter'>
      <div className='meterNote' style={
        detune > -7 && detune < 7 ? tuned :
          detune > -14 && detune < 14 ? green :
            detune > -33 && detune < 33 ? darkred : red}>{pitchNote} {pitchScale}</div>
      <GaugeChart id="gauge-chart2"
        style={meterSize}
        marginInPercent={0.05}
        cornerRadius={10}
        nrOfLevels={50}
        percent={needlePos(detune)}
        arcPadding={0}
        arcWidth={0.1}
        colors={[arcColor()]}
        textColor={arcColor()}
        needleColor={arcColor()}
        needleBaseColor={arcColor()}
        hideText={false}
        animate={true}
        animDelay={1}
        animateDuration={100}
        formatTextValue={() => pitchNote}
      />
    </div>
  );
}

export default NeedleMeter;