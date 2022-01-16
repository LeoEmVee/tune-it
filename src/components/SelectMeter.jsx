import React from 'react';

function SelectMeter ({ meter, onClick }) {
  return (
    <button className='selectMeter' onClick={onClick}>{meter === 'percent' ? 'NEEDLE' : 'PERCENT'}</button>
  );
}

export default SelectMeter;