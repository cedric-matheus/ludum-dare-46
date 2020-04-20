import React from 'react';




function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function CellFloor(props) {


  // getting type of cell
  const{type} = props;

  // creating cell css class
  const cellClassName = `cell floor${type}`;

  return <div className={cellClassName}></div>;
}

export default CellFloor;
