import React, { useEffect, useState } from 'react';
import './Main.css';
import { FaHandRock } from 'react-icons/fa';
import Options from './Options';

const Main = () => {
  const [timer, setTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [compPlay, setCompPlay] = useState('');
  const [playerPlay, setPlayerPlay] = useState('');
  const [winner, setWinner] = useState('');

  const options = [
    { name: 'Rock', icon: '<FaHandRock />' },
    { name: 'Paper', icon: '<FaHandPaper />' },
    { name: 'Scissors', icon: '<FaHandScissors />' },
  ];

  useEffect(() => {
    if (runTimer && timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (runTimer && timer <= 0) {
      setTimer(3);
      setRunTimer(false);
      decideWinner();
    }
  }, [runTimer, timer]);

  const computerPlay = () => {
    const ind = Math.floor(Math.random() * 3);
    setCompPlay(options[ind].name);
  };

  const decideWinner = () => {
    if (compPlay === playerPlay) {
      setWinner('Draw');
    } else if (
      (playerPlay === 'Rock' && compPlay === 'Scissors') ||
      (playerPlay === 'Paper' && compPlay === 'Rock') ||
      (playerPlay === 'Scissors' && compPlay === 'Paper')
    ) {
      setWinner('You win!');
    } else {
      setWinner('You lose!');
    }
    console.log('Winner:',compPlay, playerPlay);
    setCompPlay('');
    setPlayerPlay('');
    console.log('Over:',compPlay, playerPlay);
  };

  const selectedOptionHandler = (option) => {
    if (options[option]) {
      setWinner('');
      setPlayerPlay(options[option].name);
      computerPlay();
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
          <div className='winner'>{winner}</div>
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
