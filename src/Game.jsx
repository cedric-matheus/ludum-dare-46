import React from 'react';

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
    const { scene, player, enemy } = GameLogic.newScene();

    this.floor = scene;

    this.state = {
      scene,
      player,
      enemy,
    };
  }

  // set scene
  setScene = (newScene) => this.setState({ scene: newScene });


  // set player position
  setPlayerPosition = (newPosition) =>
    this.setState({ player: { ...this.state.player, position: newPosition } });

  render() {
    return (
      <div>
        <Grid
          ClassName="grid"
          scene={this.state.scene}
          player={this.state.player}
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
            <div><span>NO</span>CAT</div>
          </div>

        </div>
      </div>
    );
  }
}

export default Game;
