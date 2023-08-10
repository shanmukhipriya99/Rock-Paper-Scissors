import React from 'react';
import './Main.css';
import { FaHandRock } from 'react-icons/fa';
import Options from './Options';

const Main = () => {
  return (
    <div className='playArea'>
      <div className='main'>
        <div className='computer'>
          <div className='score'>
            <label htmlFor='Score'>Score:</label>
            10
          </div>
          <div className='hand'>
            <FaHandRock className='initialIcon' />
          </div>
        </div>
        <div className='timer'>Timer</div>
        <div className='player'>
          <div className='score'>
            <label htmlFor='Score'>Score:</label>
            10
          </div>
          <div className='hand'>
            <FaHandRock className='initialIcon' />
          </div>
        </div>
      </div>
      <Options />
    </div>
  );
};

export default Main;
