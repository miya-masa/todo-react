import { RECEIVED } from '../actions/UserActions';
import Immutable from 'immutable';

const initialiState = Immutable.Map({
  users: Immutable.List.of()
});
export default function userReducer(state = initialiState, action) {
  switch (action.type) {
    case RECEIVED:
      const users = action.data._embedded.users;
      return state.set('users', state.get('users').push(...users));
    default:
      return state;
  }
}
