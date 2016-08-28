import { REQUEST, RECEIVED } from '../actions/TodoActions';

export default function todoReducer(state = {}, action) {
  switch (action.type) {
    case REQUEST:
      console.log('request');
      return state;
    case RECEIVED:
      console.log('received');
      const todos = action.todo._embedded;
      console.log(todos);
      return Object.assign({}, state, todos);
    default:
      break;
  }
  return state;
}
