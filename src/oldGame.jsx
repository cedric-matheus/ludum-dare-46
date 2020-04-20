import React from 'react';

// importing game logic
import GameLogic from './gameLogic/Game';

// importing components
import Grid from './components/Grid';

export class Game extends React.Component {
  constructor(props) {
    super(props);

    // creating new scene and getting scene and player
    const { scene, player, enemy, enemy2 } = GameLogic.newScene();

    this.state = {
      scene,
      player,
      enemy,
      enemy2,
    };
  }

  // set scene
  setScene = (newScene) => this.setState({ scene: newScene });

  // set player position
  setPlayerPosition = (newPosition) =>
    this.setState({ player: { ...this.state.player, position: newPosition } });

  // set enemy position
  setEnemyPosition = (newPosition) =>
    this.setState({ enemy: { ...this.state.enemy, position: newPosition } });

  // set enemy2 position
  setEnemy2Position = (newPosition) =>
    this.setState({ enemy2: { ...this.state.enemy2, position: newPosition } });

  render() {
    return (
      <div>
        <Grid
          scene={this.state.scene}
          player={this.state.player}
          enemy={this.state.enemy}
          enemy2={this.state.enemy2}
          setPlayerPosition={this.setPlayerPosition}
          setEnemyPosition={this.setEnemyPosition}
          setEnemy2Position={this.setEnemy2Position}
          setScene={this.setScene}
        />
      </div>
    );
  }
}

export default Game;
