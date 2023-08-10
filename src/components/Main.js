import React from 'react';
import './Main.css';
import { FaRegHandRock } from 'react-icons/fa';

const Main = () => {
  return (
    <div className='main'>
      <div className='computer'>
        <div className='score'>
          <label htmlFor='Score'>Score:</label>
          10
        </div>
        <div className='hand'>
          <FaRegHandRock className='initialIcon' />
        </div>
      </div>
      <div className='timer'>Timer</div>
      <div className='player'>
        <div className='score'>
          <label htmlFor='Score'>Score:</label>
          10
        </div>
        <div className='hand'>
          <FaRegHandRock className='initialIcon' />
        </div>
      </div>
    </div>
  );
};

export default Main;
