import React from 'react';

import ScenesContainers from '../containers/_Scenes';

function Game({ game }) {
  // destructuring game
  const { scene } = game;

  // getting scene component
  const Scene = ScenesContainers[scene];

  // render
  return (
    <div className="gameContainer">
      <Scene />
    </div>
  );
}

export default Game;
