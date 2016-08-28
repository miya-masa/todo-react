import { EventEmitter } from 'events';
// import Dispatcher from '../../Dispatcher';
import TodoConstants from '../app/TodoConstants';
import UUID from 'uuid-js';

const CHANGE = Symbol();

//class TodoStore extends EventEmitter {
//
//  constructor() {
//    super();
//    Dispatcher.register((payload) => this.handleTodoAction(payload));
//    Dispatcher.register((payload) => this.handleDialogAction(payload));
//  }
//
//  fireEvent(...args) {
//    this.emit(CHANGE, ...args);
//  }
//
//  addListener(callback) {
//    super.addListener(CHANGE, callback);
//  }
//
//  removeListener(callback) {
//    super.removeListner(CHANGE, callback);
//  }
//
//  handleDialogAction(payload) {
//    switch (payload.actionType) {
//      case TodoConstants.SHOW_DIALOG:
//        this.showDialog();
//        this.fireEvent();
//        break;
//    }
//  }
//
//  handleTodoAction(payload) {
//    switch (payload.actionType) {
//      case TodoConstants.CREATE:
//        this.createTodo(
//          payload.todo,
//          payload.limitDate,
//          payload.complete);
//        this.fireEvent();
//        break;
//      case TodoConstants.COMPLETE:
//        this.completeTodo(payload.todoId, payload.complete);
//        this.fireEvent();
//        break;
//      case TodoConstants.REMOVE:
//        this.removeTodo(payload.todoId);
//        this.fireEvent();
//        break;
//      case TodoConstants.SEARCH:
//        const todos = this.getTodos(payload.predicate);
//        this.fireEvent(todos);
//        break;
//      default:
//        break;
//    }
//  }
//
//  removeTodo(todoId) {
//    localStorage.removeItem(todoId);
//  }
//
//  completeTodo(todoId, complete) {
//    const target = JSON.parse(localStorage.getItem(todoId));
//    target.complete = complete;
//    localStorage.setItem(todoId, JSON.stringify(target));
//  }
//
//  createTodo(todo, limitDate, complete = false) {
//    const id = 'TODOID' + UUID.create(4);
//
//    localStorage.setItem(id, JSON.stringify({
//      id,
//      todo,
//      limitDate,
//      complete
//    }));
//  }
//
//  getAllTodos() {
//    return this.getTodos(() => true);
//  }
//
//  getTodos(predicate) {
//    const todos = [];
//    Object.keys(localStorage)
//      .filter((key) => key.indexOf('TODO') >= 0)
//      .map((key) => JSON.parse(localStorage.getItem(key)))
//      .forEach((todo) => todos.push(todo));
//    return todos.filter(predicate);
//  }
//}
//export default new TodoStore();
