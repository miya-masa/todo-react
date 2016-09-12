import axios from 'axios';

export const REQUEST = 'todo.request';
export const RECEIVED = 'todo.received';

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
  console.log('start load');
  return dispatch => {
    dispatch(request());
    return axios
      .get('/api/todos/')
      .then(response => response.data)
      .then(todo => dispatch(receive(todo)));
  };
}

export function searchTodo(predicate) {
}

function request() {
  return {
    type: REQUEST
  };
}

function receive(todo) {
  return {
    type: RECEIVED,
    todo
  };
}
