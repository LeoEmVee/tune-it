import React from 'react';

function NoteMeter ({ pitchNote, detune }) {

  const green = {color: 'darkgreen'};
  const red = {color: 'darkred'};
  
  return (
    <div className='noteMeter'>
      <div className='noteChar' style={detune > -5 && detune < 5 ? green : red}>{pitchNote}</div>
      <div>Detune: {detune}%</div>
    </div>
  );
}

export default NoteMeter;