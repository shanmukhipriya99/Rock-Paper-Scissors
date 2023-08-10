import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className='main'>
      <div className='computer'>
        <div className='score'>
          <label htmlFor='Score'>Score:</label>
          10
        </div>
      </div>
      <div className='timer'>Timer</div>
      <div className='player'>
        <div className='score'>
          <label htmlFor='Score'>Score:</label>
          10
        </div>
      </div>
    </div>
  );
};

export default Main;
