import React from 'react';

function NoteMeter ({ pitchNote, detune }) {

  const tuned = {color: 'green'};
  const green = {color: 'darkgreen'};
  const yellow = {color: '#666600'};
  const red = {color: 'darkred'};
  
  return (
    <div className='noteMeter'>
      <div className='noteChar'
        style={
          detune > -3 && detune < 3 ? tuned :
            detune > -7 && detune < 7 ? green :
              detune > -20 && detune < 20 ? yellow : red}>
        {pitchNote}</div>
      <div>Detune: {detune}%</div>
    </div>
  );
}

export default NoteMeter;