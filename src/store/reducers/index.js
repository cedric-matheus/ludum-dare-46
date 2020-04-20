import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import levelReducer from './levelReducer';

export default combineReducers({
  gameReducer,
  levelReducer,
});
