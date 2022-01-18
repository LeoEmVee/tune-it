import React from 'react';

function SelectMeter ({ meter, onClick }) {
  const toggleButton = () => {
    if (meter === 'percent') return 'NEEDLE';
    if (meter === 'needle') return 'NOTE';
    if (meter === 'note') return 'PERCENT';
  };
  
  return (
    <button className='ctrlBtn' onClick={onClick}>
      {toggleButton()}
    </button>
  );
}

export default SelectMeter;