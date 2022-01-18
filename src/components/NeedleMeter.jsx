import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

function NeedleMeter ({ detune, pitchNote, pitchScale, started }) {
  const arcColor = (detune) => {
    if (detune < 7 && detune > -7) return 'green';
    return 'red';
  };
  
  return (
    <div className='needleMeter'>
      <ReactSpeedometer
        ringWidth={10}
        width={200}
        height={200}
        maxValue={50}
        minValue={-50}
        needleHeightRatio={1}
        value={Number(detune)}
        currentValueText={`${pitchNote} - ${pitchScale}`}
        needleColor={arcColor(detune)}
        textColor={arcColor(detune)}
        needleTransition='linear'
        needleTransitionDuration={started ? 3000 : 1}
        segments={7}
        segmentColors={['black']}
        maxSegmentLabels={4}
        labelFontSize='10'>
      </ReactSpeedometer>
    </div>
  );
}

export default NeedleMeter;