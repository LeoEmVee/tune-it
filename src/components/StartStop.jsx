import React from 'react';

function StartStop ({ started, onClick }) {
  return (
    <button className='ctrlBtn' onClick={onClick}>{started ? 'STOP' : 'START'}</button>
  );
}

export default StartStop;