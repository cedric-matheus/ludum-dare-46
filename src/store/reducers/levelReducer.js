import { END_TURN } from '../actions/actionTypes';

import LevelLogicObject from '../../gameLogic/LevelLogicObject';

const initialState = new LevelLogicObject(20, 10);

function levelReducer(state = initialState, action) {
  switch (action.type) {
    case END_TURN:
      return action.level;

    default:
      return state;
  }
}

export default levelReducer;
