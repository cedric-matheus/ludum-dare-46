import React from 'react';

// importing components
import Cell from '../Cell';

// importing styles
import './styles.scss';

function GridFloor(props) {
  // getting scene matrix
  const { scene } = props;





  // creating scene view
  const sceneView = scene.map((sceneRow, cellRow) => (
    <div className="row">
      {sceneRow.map((cell, cellColumn) => {
        // creating cell position object
        const cellPosition = { row: cellRow, column: cellColumn };

        return (
          <CellFloor
            handleClick={() => cellClickHandler(cellPosition)}
            type={cell}
            isPossibleMovement={Player.checkIsPossibleMovement(
              cell,
              cellPosition,
            )}
          />
        );
      })}
    </div>
  ));

  return sceneView;
}

export default GridFloor;
