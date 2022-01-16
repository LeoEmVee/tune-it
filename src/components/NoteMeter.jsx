import React from 'react';

function NoteMeter ({ pitchNote }) {
  
  return (
    <div className='noteMeter'>
      <div className='noteChar'>{pitchNote}</div>
    </div>
    
  );
}

export default NoteMeter;