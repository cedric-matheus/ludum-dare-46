// scenes constants
export const SCENES = {
  MAIN_MENU: 'MainMenu',
  LEVEL: 'Level',
  GAME_OVER: 'GameOver',
};

export default class Game {
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
