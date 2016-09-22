import { OPEN, CLOSE, CHANGE_USER } from '../actions/DialogActions';

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
    case CHANGE_USER:
      return Object.assign({}, state, {
        select: action.select
      });
    default:
      return Object.assign({}, state);
  }
}
