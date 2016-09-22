export const OPEN = 'dialog.open';
export const CLOSE = 'dialog.close';
export const CHANGE_USER = 'dialog.change.user';

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

export function changeUser(select) {
  return {
    type: CHANGE_USER,
    select
  };
}
