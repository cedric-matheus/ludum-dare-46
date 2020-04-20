import React from 'react';

// importing player logic
import Player from '../../gameLogic/Player';

import Game from '../../gameLogic/Game';

// importing components
import Cell from '../Cell';

// importing styles
import './styles.scss';

function Grid(props) {
  // getting scene matrix
  const {
    scene,
    player,
    enemy,
    enemy2,
    setPlayerPosition,
    setEnemyPosition,
    setEnemy2Position,
    setScene,
  } = props;

  // getting player position
  const { position: playerPosition } = player;

  // cell click handler
  const cellClickHandler = (cellPosition) => {
    // moving player
    const { newScene: playerScene, movementSuccess } = Player.move(
      scene,
      cellPosition,
      playerPosition
    );

    // if success movement
    if (movementSuccess) {
      const { newScene2, newEnemyPosition, newEnemy2Position } = Game.endTurn(
        playerScene,
        player,
        enemy,
        enemy2
      );

      // changing player position
      setPlayerPosition(cellPosition);

      // changing enemy position
      setEnemyPosition(newEnemyPosition);

      // changing enemy position
      setEnemy2Position(newEnemy2Position);

      console.log(newScene2);

      // changing scene
      setScene(newScene2);
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
