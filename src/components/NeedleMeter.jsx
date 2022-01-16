import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

function NeedleMeter ({ detune, pitchNote, pitchScale }) {
  return (
    <ReactSpeedometer
      ringWidth={50}
      width={200}
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
  );
}

export default NeedleMeter;