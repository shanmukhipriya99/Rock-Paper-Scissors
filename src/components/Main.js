import React, { useEffect, useState } from 'react';
import './Main.css';
import { FaHandRock } from 'react-icons/fa';
import Options from './Options';

const Main = () => {
  const [timer, setTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  useEffect(() => {
    if (runTimer && timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
        console.log(timer);
      }, 1000);
    } else if (runTimer && timer <= 0) {
      setTimer(3);
      setRunTimer(false);
    }
  }, [runTimer, timer]);

  const selectedOptionHandler = (option) => {
    if (option === 'Rock' || option === 'Paper' || option === 'Scissors') {
      setRunTimer(true);
    }
  };

  return (
    <div className='playArea'>
      <div className='main'>
        <div className='computer'>
          <div className='score'>
            <label htmlFor='Score'>Score:</label>
            {compScore}
          </div>
          <div className='hand'>
            <FaHandRock
              className={
                runTimer && timer > 0 ? 'initialIcon hover' : 'initialIcon'
              }
            />
          </div>
        </div>
        {runTimer ? (
          <div className='timer'>{timer}</div>
        ) : (
          <div className='timer'></div>
        )}
        <div className='player'>
          <div className='score'>
            <label htmlFor='Score'>Score:</label>
            {playerScore}
          </div>
          <div className='hand'>
            <FaHandRock
              className={
                runTimer && timer > 0 ? 'initialIcon hover' : 'initialIcon'
              }
            />
          </div>
        </div>
      </div>
      <Options selectedOptionHandler={selectedOptionHandler} />
    </div>
  );
};

export default Main;
