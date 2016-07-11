import { EventEmitter } from 'events';
import Dispatcher from '../../Dispatcher';
import TodoConstants from '../app/TodoConstants';
import UUID from 'uuid-js';

const CHANGE = Symbol();

class TodoStore extends EventEmitter {

  constructor() {
    super();
    this.dispatcherToken = Dispatcher
      .register((payload) => this.handleViewAction(payload));
  }

  fireEvent(...args) {
    this.emit(CHANGE, ...args);
  }

  addListener(callback) {
    super.addListener(CHANGE, callback);
  }

  removeListener(callback) {
    super.removeListner(CHANGE, callback);
  }

  handleViewAction(payload) {
    switch (payload.action.actionType) {
      case TodoConstants.CREATE:
        this.createTodo(
          payload.action.todo,
          payload.action.limitDate,
          payload.action.complete);
        this.fireEvent();
        break;
      case TodoConstants.COMPLETE:
        this.completeTodo(payload.action.todoId, payload.action.complete);
        this.fireEvent();
        break;
      case TodoConstants.REMOVE:
        this.removeTodo(payload.action.todoId);
        this.fireEvent();
        break;
      case TodoConstants.SEARCH:
        const todos = this.getTodos(payload.action.predicate);
        this.fireEvent(todos);
        break;
      default:
        break;
    }
  }

  removeTodo(todoId) {
    localStorage.removeItem(todoId);
  }

  completeTodo(todoId, complete) {
    const target = JSON.parse(localStorage.getItem(todoId));
    target.complete = complete;
    localStorage.setItem(todoId, JSON.stringify(target));
  }

  createTodo(todo, limitDate, complete = false) {
    const id = 'TODOID' + UUID.create(4);

    localStorage.setItem(id, JSON.stringify({
      id,
      todo,
      limitDate,
      complete
    }));
  }

  getAllTodos() {
    return this.getTodos(() => true);
  }

  getTodos(predicate) {
    const todos = [];
    Object.keys(localStorage)
      .filter((key) => key.indexOf('TODO') >= 0)
      .map((key) => JSON.parse(localStorage.getItem(key)))
      .forEach((todo) => todos.push(todo));
    return todos.filter(predicate);
  }
}
export default new TodoStore();
