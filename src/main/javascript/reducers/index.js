import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';
import dialogReducer from './dialogReducer';

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
  dialogReducer
});

export default rootReducer;
