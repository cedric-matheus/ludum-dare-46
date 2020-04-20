import { END_TURN } from './actionTypes';

export const endTurn = (playerMoveCellPosition) => (dispatch, getState) => {
  const level = getState().levelReducer;

  level.endTurn(playerMoveCellPosition);

  const newLevel = JSON.parse(JSON.stringify(level));

  console.log(level);
  console.log(newLevel);

  dispatch({
    type: END_TURN,
    level: newLevel,
  });
};
