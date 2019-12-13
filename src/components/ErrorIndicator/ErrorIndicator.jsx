import React from 'react';
import img from './death-icon.png';

import './ErrorIndicator.css';

const ErrorIndicator = () => {
  return(
      <div className='error-indicator'>
          <img src={img} alt='death-star' className='error-icon'/>
          <span className='boom'>BOOM!</span>
          <span>
              Shit happens,
          </span>
          <span>but the force be with you!</span>
      </div>
  )
};

export default ErrorIndicator;