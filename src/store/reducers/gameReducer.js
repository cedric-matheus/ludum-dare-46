import { NEW_GAME } from '../actions/actionTypes';

import GameLogicObject from '../../gameLogic/GameLogicObject';

const initialState = new GameLogicObject();

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return { ...action.game };

    default:
      return state;
  }
}

export default gameReducer;
