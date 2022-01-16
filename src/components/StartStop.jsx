import React from 'react';

function StartStop ({ started, onClick }) {
  return (
    <button className='startStop' onClick={onClick}>{started ? 'STOP' : 'START'}</button>
  );
}

export default StartStop;