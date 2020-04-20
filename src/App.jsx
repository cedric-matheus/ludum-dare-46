import React from 'react';

import Game from './gameLogic/Game';

import GameComponent from './components/Game';

function App () {
  constructor() {
    super();

    // initializing game
    const game = new Game();

    this.state = {
      game: game,
    };
  }

  updateGameState = (newGameState) => this.setState({ game: newGameState });

  render() {
    return (
      <GameComponent
        game={this.state.game}
        updateGameState={this.updateGameState}
      />
    );
  }
}

export default App;
