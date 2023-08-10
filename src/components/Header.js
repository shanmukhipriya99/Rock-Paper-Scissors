import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='title'>
        <span className='rock'>Rock </span>
        <span className='paper'>Paper </span>
        <span className='scissors'>Scissors</span>
      </div>
    </div>
  );
};

export default Header;
