import axios from 'axios';

export const REQUEST = 'user.request';
export const RECEIVED = 'user.received';

export function create(todo, limitDate) {
  console.log('start create');
  return dispatch => {
    dispatch(request());
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
  return dispatch => {
    dispatch(request());
    return axios
      .get('/api/users/')
      .then(response => response.data)
      .then(users => dispatch(receive(users)));
  };
}

export function searchTodo(predicate) {
}

function request() {
  return {
    type: REQUEST
  };
}

function receive(users) {
  return {
    type: RECEIVED,
    users
  };
}
