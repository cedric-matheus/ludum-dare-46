import React from 'react';

import Scenes from './_Scenes';

function Game(props) {
  // destructuring props
  const { game } = props;

  // destructuring game
  const { scene } = game;

  // getting scene component
  const Scene = Scenes[scene];

  // render
  return (
    <div className="gameContainer">
      <Scene />
    </div>
  );
}

export default Game;
