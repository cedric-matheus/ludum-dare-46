import React from 'react';

import ButtonComponent from '../ButtonComponent';

function MainMenuScene({ newGameClickHandler }) {
  // rendering component
  return (
    <div className="mainMenuContainer">
      <h1>MENU</h1>

      <ButtonComponent
        handleClick={newGameClickHandler}
        className="newGameButton"
      >
        Novo Jogo
      </ButtonComponent>
    </div>
  );
}

export default MainMenuScene;
