import fetch from 'isomorphic-fetch';

export const REQUEST = 'todo.request';
export const RECEIVED = 'todo.received';

export function create(todo, limitDate) {
  console.log('start create');
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
    return fetch('/api/todos/')
      .then(response => response.json())
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
