import React from 'react';

function SelectStdFreq ({refFreq, rangeChange, inputChange, onBlur}) {
  return (
    <div className='stdFreqSel'>
      <span>FREQ.</span>
      <input className='rangeInput' type="range" min="400" max="509" value={refFreq} onChange={rangeChange}/>
      <input className='manInput' type="number" min="400" max="509" value={refFreq} onChange={inputChange} onBlur={onBlur}></input>
    </div>
  );
}

export default SelectStdFreq;