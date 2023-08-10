import React, { useEffect, useState } from 'react';
import './Main.css';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
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
    { name: 'Rock', icon: <FaHandRock className='initialIcon' /> },
    { name: 'Paper', icon: <FaHandPaper className='initialIcon' /> },
    { name: 'Scissors', icon: <FaHandScissors className='initialIcon' /> },
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
      setPlayerScore(playerScore + 1);
    } else {
      setWinner('You lose!');
      setCompScore(compScore + 1);
    }
  };

  const selectedOptionHandler = (option) => {
    if (options[option]) {
      setCompPlay('');
      setPlayerPlay('');
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
            <label htmlFor='Score'>Computer: </label>
            {compScore}
          </div>
          <div className='hand'>
            {compPlay && winner ? (
              options.find((option) => option.name === compPlay)?.icon
            ) : (
              <FaHandRock
                className={
                  runTimer && timer > 0 ? 'initialIcon hover' : 'initialIcon'
                }
              />
            )}
          </div>
        </div>
        {runTimer ? (
          <div className='timer'>{timer}</div>
        ) : (
          <div className='winner'>{winner}</div>
        )}
        <div className='player'>
          <div className='score'>
            <label htmlFor='Score'>Player: </label>
            {playerScore}
          </div>
          <div className='hand'>
            {playerPlay && winner ? (
              options.find((option) => option.name === playerPlay)?.icon
            ) : (
              <FaHandRock
                className={
                  runTimer && timer > 0 ? 'initialIcon hover' : 'initialIcon'
                }
              />
            )}
          </div>
        </div>
      </div>
      <Options selectedOptionHandler={selectedOptionHandler} />
    </div>
  );
};

export default Main;
