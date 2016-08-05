import Dispatcher from '../../Dispatcher';
import TodoConstants from '../app/TodoConstants';

class TodoActions {

  createTodo(todo, limitDate) {
    Dispatcher.dispatch({
      actionType: TodoConstants.CREATE,
      todo,
      limitDate
    });
  }

  removeTodo(todoId) {
    Dispatcher.dispatch({
      actionType: TodoConstants.REMOVE,
      todoId
    });
  }

  completeTodo(todoId, complete) {
    Dispatcher.dispatch({
      actionType: TodoConstants.COMPLETE,
      todoId,
      complete
    });
  }

  searchTodo(predicate) {
    Dispatcher.dispatch({
      actionType: TodoConstants.SEARCH,
      predicate
    });
  }

}
export default new TodoActions();
