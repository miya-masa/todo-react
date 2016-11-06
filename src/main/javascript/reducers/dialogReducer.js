import { OPEN, CLOSE, CHANGE_USER, CHANGE_TODO, CHANGE_LIMIT_DATE, CLEAR } from '../actions/DialogActions';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  todo: '',
  limitDate: '',
  user: {
    id: '',
    link: ''
  },
  openDialog: false,
  isValid: false
});

export default function dialogReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN:
      return state.set('openDialog', true);
    case CLOSE:
      return state.set('openDialog', false);
    case CLEAR:
      return state.merge({
        todo: '',
        limitDate: '',
        select: '',
        error: {
          todo: '',
          limitDate: ''
        }
      });
    case CHANGE_USER:
      return state.set('user', action.user);
    case CHANGE_LIMIT_DATE:
      return state.set('limitDate', action.limitDate);
    case CHANGE_TODO:
      return state.set('todo', action.todo);
    default:
      return state;
  }
}
