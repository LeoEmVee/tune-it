import React from 'react';

function StartStop ({ started, onClick }) {
  return (
    <button onClick={onClick}>{started ? 'STOP' : 'START'}</button>
  );
}

export default StartStop;