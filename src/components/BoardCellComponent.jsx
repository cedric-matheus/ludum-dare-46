import React from 'react';

import { CELL_CONTENTS } from '../gameLogic/LevelLogicObject';

function BoardCellComponent({ cell, isPossibleMovement, handleClick }) {
  // creating cell css class
  const cellClassName = isPossibleMovement
    ? `cell ${CELL_CONTENTS[cell]} possibleMovement`
    : `cell ${CELL_CONTENTS[cell]}`;

  return <div onClick={handleClick} className={cellClassName}></div>;
}

export default BoardCellComponent;
