import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore(preloadedState) {
  const store = createStore(
    function(state, action) {
      return state;
    },
    preloadedState,
    applyMiddleware(thunkMiddleware, createLogger())
  );
  return store;
}
