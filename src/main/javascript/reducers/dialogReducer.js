import { OPEN, CLOSE, CHANGE_USER, CHANGE_TODO, CHANGE_LIMIT_DATE, CLEAR } from '../actions/DialogActions';

const initialState = {
  todo: '',
  limitDate: '',
  select: '',
  openDialog: false,
  error: {
    todo: '',
    limitDate: ''
  }
};

export default function dialogReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN:
      return Object.assign({}, state, {
        openDialog: true
      });
    case CLOSE:
      return Object.assign({}, state, {
        openDialog: false
      });
    case CLEAR:
      return Object.assign({}, state, {
        todo: '',
        limitDate: '',
        select: '',
        error: {
          todo: '',
          limitDate: ''
        }
      });
    case CHANGE_USER:
      return Object.assign({}, state, {
        select: action.select
      });
    case CHANGE_LIMIT_DATE:
      return Object.assign({}, state, {
        limitDate: action.limitDate
      });
    case CHANGE_TODO:
      return Object.assign({}, state, {
        todo: action.todo
      });
    default:
      return Object.assign({}, state);
  }
}
