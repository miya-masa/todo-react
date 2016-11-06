import axios from 'axios';
import moment from 'moment';
import { ajax } from './AjaxActions';
export const REQUEST = 'todo.request';
export const RECEIVED = 'todo.received';
export const REMOVE_TODO = 'todo.remove';

// TODO to todo form 
export function create(todo, limitDate, selectedUserId) {
  const complete = false;
  return ajax((dispatch, getState) => {
    return axios
      .post('/api/todos/', {
        todo,
        limitDate: moment(limitDate).format('YYYY-MM-DDTHH:mm:ss.SSS'),
        complete,
        user: {
          id: selectedUserId
        }
      })
      .then(() => dispatch(load()));
  });
}

export function remove(todo) {
  return ajax(dispatch => axios
    .delete(todo._links.self.href)
    .then(() => dispatch(load()))
  );
}

export function complete(todo, value) {
  console.log('start complete');
  return ajax(dispatch => axios
    .put(todo._links.self.href, Object.assign({}, todo, {
      complete: value
    }))
    .then(() => dispatch(load()))
  );
}

export function load() {
  console.log('start load');
  return ajax(dispatch => axios
    .get('/api/todos/')
    .then(response => response.data)
    .then(todo => dispatch({
      type: RECEIVED,
      data: todo
    })));
}

export function searchTodo(predicate) {
}
// function request(dispatch) {
//   dispatch(loading());
//   return {
//     type: REQUEST
//   };
// }
// function receive(dispatch, todo) {
//   dispatch(hide());
//   return {
//     type: RECEIVED,
//     todo
//   };
// }
