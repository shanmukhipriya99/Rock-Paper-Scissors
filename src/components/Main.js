import React, { useEffect, useState } from 'react';
import './Main.css';
import { FaHandRock } from 'react-icons/fa';
import Options from './Options';

const Main = () => {
  let [timer, setTimer] = useState(3);
  let [runTimer, setRunTimer] = useState(false);

  useEffect(() => {
    if (runTimer && timer > 0) {
      setInterval(() => {
        setTimer(timer - 1);
        console.log(timer);
      }, 1000);
    } else if (runTimer && timer <= 0) {
      setTimer(3);
      setRunTimer(false);
    }
  }, [runTimer, timer]);

  return (
    <div className='playArea'>
      <div className='main'>
        <div className='computer'>
          <div className='score'>
            <label htmlFor='Score'>Score:</label>
            10
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
            10
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
      <Options />
    </div>
  );
};

export default Main;
