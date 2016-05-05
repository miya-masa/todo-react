import { EventEmitter } from 'events';
import Dispatcher from '../app/Dispatcher';
import TodoConstants from '../app/TodoConstants';

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
    const id = (Number(new Date()) +
    Math.floor(Math.random() * 999999)).toString(36);
    console.log(JSON.stringify({
      id,
      todo,
      limitDate,
      complete
    }));

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
    for (let i = 0; i < localStorage.length; ++i) {
      todos.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    return todos.filter(predicate);
  }
}
export default new TodoStore();
