import axios from 'axios';
import { ajax } from './AjaxActions';

export const REQUEST = 'user.request';
export const RECEIVED = 'user.received';

export function create(todo, limitDate) {
  console.log('start create');
  return dispatch => {
    dispatch(ajax(REQUEST));
    const user = {
      id: 1
    };
    const complete = false;
    return axios
      .post('/api/todos/', {
        todo,
        limitDate,
        complete,
        user
      });
  };
}

export function remove(todoId) {
  console.log('start remove');
}

export function complete(todoId, limitDate) {
  console.log('start complete');
}

export function load() {
  console.log('start user load');
  return ajax(dispatch => axios
    .get('/api/users/')
    .then(response => response.data)
    .then(data => dispatch({
      type: RECEIVED,
      data
    }))
  );
}

export function searchTodo(predicate) {
}
