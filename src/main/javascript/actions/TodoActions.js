import axios from 'axios';
import moment from 'moment';

export const REQUEST = 'todo.request';
export const RECEIVED = 'todo.received';
export const REMOVE_TODO = 'todo.remove';

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
        limitDate: moment(limitDate).format('YYYY-MM-DDTHH:mm:ss.SSS'),
        complete,
        user
      }).then(() => dispatch(load()));
  };
}

export function remove(todo) {
  console.log('start remove');
  return dispatch => {
    dispatch(request());
    axios
      .delete(todo._links.self.href)
      .then(() => dispatch(load()));
  };
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
