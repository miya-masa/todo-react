import { REQUEST, RECEIVED } from '../actions/TodoActions';

const initialiState = {
  todos: []
};

export default function todoReducer(state = initialiState, action) {
  switch (action.type) {
    case REQUEST:
      console.log('request');
      return Object.assign({}, state);
    case RECEIVED:
      console.log('received');
      const todos = action.todo._embedded.todos.map(e => Object.assign({}, e, {
        limitDate: `${e.limitDate.year}-${e.limitDate.monthValue}-${e.limitDate.dayOfMonth}`
      }));
      return Object.assign({}, state, {
        todos
      });
    default:
      return Object.assign({}, state);
  }
}
