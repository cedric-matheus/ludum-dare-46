import { NEW_GAME } from './actionTypes';

export const newGame = () => (dispatch, getState) => {
  const game = getState().gameReducer;

  game.newGame();

  dispatch({
    type: NEW_GAME,
    game,
  });
};
