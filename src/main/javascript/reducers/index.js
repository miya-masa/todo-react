import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';
import dialogReducer from './dialogReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
  dialogReducer,
  loaderReducer
});

export default rootReducer;
