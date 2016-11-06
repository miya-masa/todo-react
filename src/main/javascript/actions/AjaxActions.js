import { loading, hide } from './LoaderActions';

export function ajax(exec) {
  return (dispatch, getState) => {
    dispatch(loading());
    exec(dispatch, getState).then(() => dispatch(hide()));
  };
}
