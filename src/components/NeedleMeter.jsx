import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

function NeedleMeter ({ detune, pitchNote, pitchScale }) {
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
    <ReactSpeedometer
      ringWidth={40}
      width={250}
      maxValue={50}
      minValue={-50}
      needleHeightRatio={0.8}
      value={detune}
      currentValueText={`${pitchNote} - ${pitchScale}`}
      needleColor="black"
      textColor="black"
      needleTransition='ease'
      needleTransitionDuration={1200}
      segments={5}
      segmentColors={arcColor()}
      maxSegmentLabels={4}
      labelFontSize='10'
      paddingHorizontal={10}
      paddingVertical={10}>
    </ReactSpeedometer>
  );
}

export default NeedleMeter;