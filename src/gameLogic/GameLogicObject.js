// scenes constants
export const SCENES = {
  MAIN_MENU: 'MainMenuScene',
  LEVEL: 'LevelScene',
  GAME_OVER: 'GameOverScene',
};

export default class GameLogicObject {
  constructor() {
    this.scene = SCENES.MAIN_MENU;
  }

  mainMenu() {
    this.scene = SCENES.MAIN_MENU;
  }

  newGame() {
    this.scene = SCENES.LEVEL;
  }

  gameOver() {
    this.scene = SCENES.GAME_OVER;
  }
}
