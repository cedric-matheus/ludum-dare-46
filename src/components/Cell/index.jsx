import React from 'react';

// cell types object
const cellTypes = {
  w: 'wall',
  p: 'player',
  e: 'enemy',
  '': '',
};

function Cell(props) {
  // getting type of cell
  const { type, isPossibleMovement, handleClick } = props;

  // creating cell css class
  const cellClassName = isPossibleMovement
    ? `cell ${cellTypes[type]} possibleMovement`
    : `cell ${cellTypes[type]}`;

  return <div onClick={handleClick} className={cellClassName}></div>;
}

export default Cell;
