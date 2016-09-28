export const OPEN = 'dialog.open';
export const CLOSE = 'dialog.close';
export const CLEAR = 'dialog.clear';
export const CANCEL = 'dialog.cancel';
export const CHANGE_USER = 'dialog.change_user';
export const CHANGE_LIMIT_DATE = 'dialog.change_limit_date';
export const CHANGE_TODO = 'dialog.change_todo';

export function open() {
  return {
    type: OPEN
  };
}

export function close() {
  return {
    type: CLOSE
  };
}

export function cancel() {
  return dispatch => {
    dispatch(clear());
    dispatch(close());
  };
}

export function clear() {
  return {
    type: CLEAR
  };
}

export function onChangeUser(select) {
  return {
    type: CHANGE_USER,
    select
  };
}

export function onChangeTodo(todo) {
  return {
    type: CHANGE_TODO,
    todo
  };
}

export function onChangeLimitDate(limitDate) {
  return {
    type: CHANGE_LIMIT_DATE,
    limitDate
  };
}
