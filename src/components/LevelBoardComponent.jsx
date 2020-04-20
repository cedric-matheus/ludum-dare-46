import React from 'react';

// importing components
import BoardCellComponent from './BoardCellComponent';

function LevelBoardComponent({ levelMatrix, endTurn, player }) {
  // creating scene view
  const levelBoard = levelMatrix.map((levelRow, row) => (
    <div className="row">
      {levelRow.map((cell, column) => {
        // creating cell position object
        const cellPosition = { row, column };

        const isPossibleMovement = player.checkIsPossibleMovement(
          cell,
          cellPosition
        );

        return (
          <BoardCellComponent
            key={`${row}, ${column}`}
            handleClick={() => endTurn(cellPosition)}
            cell={cell}
            isPossibleMovement={isPossibleMovement}
          />
        );
      })}
    </div>
  ));

  // rendering level board
  return levelBoard;
}

export default LevelBoardComponent;
