import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
  const store = createStore(
    // Reducerの集合
    rootReducer,
    // TODO 要確認
    preloadedState,
    // thunkMiddleware
    // actionsのdispatchを遅延させるミドルウェア
    // createLogger()
    // ログ出力ミドルウェア
    applyMiddleware(thunkMiddleware, createLogger())
  );
  return store;
}
