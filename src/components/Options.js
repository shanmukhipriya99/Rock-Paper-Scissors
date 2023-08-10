import React from 'react';
import './Options.css';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

const Options = () => {
  return (
    <div className='optionsSelectionArea'>
      <div className='options'>
        <FaHandRock />
        <FaHandPaper />
        <FaHandScissors />
      </div>
      <div className='play'><span>Play</span></div>
    </div>
  );
};

export default Options;
