import { REQUEST, RECEIVED } from '../actions/TodoActions';

export default (state, action) => {
  switch (action.type) {
    case REQUEST:
      console.log('request');
      return state;
    case RECEIVED:
      console.log('received');
      return state;
    default:
      break;
  }
};
