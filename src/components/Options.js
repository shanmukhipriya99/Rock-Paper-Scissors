import React, { useState } from 'react';
import './Options.css';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';

const Options = ({ selectedOptionHandler }) => {
  const [play, setPlay] = useState();

  const optionHandler = (option) => {
    if (selectedOptionHandler) {
      selectedOptionHandler(option);
    }
    setPlay();
  };
  return (
    <div className='optionsSelectionArea'>
      <div className='options'>
        <FaHandRock onClick={() => setPlay(1)} />
        <FaHandPaper onClick={() => setPlay(2)} />
        <FaHandScissors onClick={() => setPlay(3)} />
      </div>
      {play ? (
        <div className='play' onClick={() => optionHandler(play-1)}>
          <span>Play</span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Options;
