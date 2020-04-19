import React from 'react';

// importing player logic
import Player from '../../gameLogic/Player';

// importing components
import Cell from '../Cell';

// importing styles
import './styles.scss';

function Grid(props) {
  // getting scene matrix
  const { scene, player, setPlayerPosition, setScene } = props;

  // getting player position
  const { position: playerPosition } = player;

  // cell click handler
  const cellClickHandler = (cellPosition) => {
    // moving player
    const { newScene, movementSuccess } = Player.move(
      scene,
      cellPosition,
      playerPosition
    );

    // if success movement
    if (movementSuccess) {
      // changing scene
      setScene(newScene);

      // changing player position
      setPlayerPosition(cellPosition);
    }
  };

  // creating scene view
  const sceneView = scene.map((sceneRow, cellRow) => (
    <div className="row">
      {sceneRow.map((cell, cellColumn) => {
        // creating cell position object
        const cellPosition = { row: cellRow, column: cellColumn };

        return (
          <Cell
            handleClick={() => cellClickHandler(cellPosition)}
            type={cell}
            isPossibleMovement={Player.checkIsPossibleMovement(
              cell,
              cellPosition,
              playerPosition
            )}
          />
        );
      })}
    </div>
  ));

  return sceneView;
}

export default Grid;
