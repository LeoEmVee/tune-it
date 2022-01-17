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
      window.alert('Tune frequency must be between 400 and 509 (Hz)');
    } else if (value > 509) {
      setValue(509);
      window.alert('Tune frequency must be between 400 and 509 (Hz)');
    }
  };
  
  return (
    <div className='stdFreqSel'>
      <span>FREQ.</span>
      <input className='rangeInput' type="range" min="400" max="509" value={value} onChange={handleSliderChange, handleInputChange}/>
      <input className='manInput' type="number" min="400" max="509" value={value} onChange={handleInputChange} onBlur={handleBlur}></input>
    </div>
  );
}

export default SelectStdFreq;