import React from 'react';
import Sound from 'react-sound';

// importing game logic
import GameLogic from './gameLogic/Game';

// importing components
import Grid from './components/Grid';

// importing floor components
import GridFloorFake from './components/GridFloorFake';

// importing styles
import './global.scss';

export class Game extends React.Component {
  constructor(props) {
    super(props);

    // creating new scene and getting scene and player
    const { scene, player, enemy, enemy2 } = GameLogic.newScene();

    this.floor = scene;

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

  // set player position
  setEnemyPosition = (newPosition) =>
    this.setState({ enemy: { ...this.state.enemy, position: newPosition } });

  // set player position
  setEnemy2Position = (newPosition) =>
    this.setState({ enemy2: { ...this.state.enemy2, position: newPosition } });

  render() {
    return (
      <div>
        <Grid
          ClassName="grid"
          scene={this.state.scene}
          enemy={this.state.enemy}
          enemy2={this.state.enemy2}
          player={this.state.player}
          setEnemyPosition={this.setEnemyPosition}
          setEnemy2Position={this.setEnemy2Position}
          setPlayerPosition={this.setPlayerPosition}
          setScene={this.setScene}
        />
        <GridFloorFake />

        {/* Border all game */}
        <div className="border"></div>

        {/* Power By */}
        <div className="powerby">Power by</div>
        <div className="groupName">
          <div>Cedric Matheus</div>
          <div>Eder Pedroso</div>
        </div>

        <div className="hud">
          <div className="coin_area">
            <div className="coin"></div>
            <div className="coin_qtd">25</div>
          </div>

          <div className="logo_area">
            <div>
              <span>NO</span>CAT
            </div>
          </div>
        </div>
        <Sound
          url="music.m4a"
          playStatus={Sound.status.PLAYING}
          playFromPosition={300 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
          loop={true}
          volume={30}
        />
      </div>
    );
  }
}

export default Game;
