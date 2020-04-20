import React from 'react';

// cell types object
const cellTypes = {
  w: 'wall',
  p: 'player',
  e: 'enemy',
  '': '',
};


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Cell(props) {


  // getting type of cell
  const { type, isPossibleMovement, handleClick } = props;

  // creating cell css class
  const cellClassName = isPossibleMovement
    ? `cell ${cellTypes[type]} possibleMovement floor${getRandomInt(3)}`
    : `cell ${cellTypes[type]} floor${getRandomInt(5)}`;

  return <div onClick={handleClick} className={cellClassName}></div>;
}

export default Cell;
