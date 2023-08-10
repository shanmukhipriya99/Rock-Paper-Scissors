import React, { useState } from 'react';
import './Options.css';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

const Options = ({ selectedOptionHandler }) => {
  const [play, setPlay] = useState('');

  const optionHandler = (option) => {
    if (selectedOptionHandler) {
      selectedOptionHandler(option);
    }
  };
  return (
    <div className='optionsSelectionArea'>
      <div className='options'>
        <FaHandRock onClick={() => setPlay('Rock')} />
        <FaHandPaper onClick={() => setPlay('Paper')} />
        <FaHandScissors onClick={() => setPlay('Scissors')} />
      </div>
      {play ? (
        <div className='play' onClick={() => optionHandler(play)}>
          <span>Play</span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Options;
