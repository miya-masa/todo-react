import { REQUEST, RECEIVED } from '../actions/UserActions';

const initialiState = {
  users: []
};

export default function userReducer(state = initialiState, action) {
  console.log('userReducer reducer');
  switch (action.type) {
    case REQUEST:
      console.log('request');
      return Object.assign({}, state);
    case RECEIVED:
      console.log('received');
      const users = action.users._embedded.users;
      return Object.assign({}, state, {
        users
      });
    default:
      return Object.assign({}, state);
  }
}
