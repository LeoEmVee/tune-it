import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

function NeedleMeter ({ detune, pitchNote, pitchScale, started }) {
  const arcColor = () => {
    if (detune < 7 && detune > -7) return ['green'];
    if (detune < 14 && detune > -14) return ['green', 'green', 'red', 'red', 'red', 'green', 'green'];
    if (detune < 33 && detune > -33) return ['green', 'red', 'red', 'red', 'red', 'red', 'green'];
    return ['red'];
  };

  return (
    <div className='needleMeter'>
      <ReactSpeedometer
        ringWidth={30}
        width={200}
        height={100}
        maxValue={50}
        minValue={-50}
        needleHeightRatio={0.8}
        value={detune}
        currentValueText={`${pitchNote} - ${pitchScale}`}
        needleColor="black"
        textColor="black"
        needleTransition='easeBounceIn'
        needleTransitionDuration={started ? 3000 : 1}
        segments={7}
        segmentColors={arcColor()}
        maxSegmentLabels={4}
        labelFontSize='10'>
      </ReactSpeedometer>
    </div>
  );
}

export default NeedleMeter;