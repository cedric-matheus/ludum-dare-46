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
  const { column: playerColumn, row: playerRow } = player.position;

  // cell click handler
  const cellClickHandler = (cellRow, cellColumn) => {
    // moving player
    const { newScene, movementSuccess } = Player.move(
      scene,
      cellRow,
      cellColumn,
      playerRow,
      playerColumn
    );

    // if success movement
    if (movementSuccess) {
      // new player position
      const newPlayerPositio = {
        row: cellRow,
        column: cellColumn,
      };

      // changing scene
      setScene(newScene);

      // changing player position
      setPlayerPosition(newPlayerPositio);
    }
  };

  // creating scene view
  const sceneView = scene.map((sceneRow, cellRow) => (
    <div className="row">
      {sceneRow.map((cell, cellColumn) => (
        <Cell
          handleClick={() => cellClickHandler(cellRow, cellColumn)}
          type={cell}
          isPossibleMovement={Player.checkIsPossibleMovement(
            cell,
            cellRow,
            cellColumn,
            playerRow,
            playerColumn
          )}
        />
      ))}
    </div>
  ));

  return sceneView;
}

export default Grid;
