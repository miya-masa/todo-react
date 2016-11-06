import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todoReducer from './todoReducer';
import userReducer from './userReducer';
import dialogReducer from './dialogReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  todoReducer,
  userReducer,
  dialogReducer,
  loaderReducer,
  formReducer
});

export default rootReducer;
