import React from 'react';

function Instructions () {
  return (
    <div className='panel'>
      <div className='instrPanel'>
        <h1>TUNE-IT!</h1>
        <h5>A very simple instrument tuner</h5>
        <p className='instrText'> How to use:<br/><br/>
        - Press START button (bottom left) to beging tuning. Press STOP to end.<br/>
        
        - Use the slider or the input field below the meter to select the reference frequency (from 400 to 509 Hz).<br/>
        
        - Press the button on the right bottom to toggle between different meter views (percent, needle and note character).<br/><br/>
        
        Thanks to:<br/><br/>
          <a href='https://github.com/cwilso' target='_blank' rel="noreferrer">Chris Wilson</a>, for <a href='https://github.com/cwilso/PitchDetect' target='_blank' rel="noreferrer">PitchDetect</a><br/>
          <a href='https://github.com/Martin36' target='_blank' rel="noreferrer">Martin36</a>, for <a href='https://github.com/Martin36/react-gauge-chart' target='_blank' rel="noreferrer">react-gauge-chart</a><br/>
          <a href='https://github.com/adriamcassorla' target='_blank' rel="noreferrer">Adrià M. Cassorla</a>, for his technical (and invaluable) support.
        </p>
      </div>
    </div>
  );
}

export default Instructions;