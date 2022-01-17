import React, { useState } from 'react';

function SelectStdFreq () {
  const [value, setValue] = useState(440);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 400) {
      setValue(400);
    } else if (value > 509) {
      setValue(509);
    }
  };
  
  return (
    <div className='stdFreqSel'>
      <span>FREQ.</span>
      <input className='rangeInput' type="range" min="400" max="509" value={value} onChange={handleSliderChange, handleInputChange}/>
      <input className='manInput' type="number" value={value} onChange={handleInputChange} onBlur={handleBlur}></input>
    </div>
  );
}

export default SelectStdFreq;