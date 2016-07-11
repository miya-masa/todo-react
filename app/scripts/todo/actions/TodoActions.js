import Dispatcher from '../../Dispatcher';
import TodoConstants from '../app/TodoConstants';

class TodoActions {

  createTodo(todo, limitDate) {
    Dispatcher.dispatch({
      source: 'VIEW_ACTION',
      action: {
        actionType: TodoConstants.CREATE,
        todo,
        limitDate
      }
    });
  }

  removeTodo(todoId) {
    Dispatcher.dispatch({
      source: 'VIEW_ACTION',
      action: {
        actionType: TodoConstants.REMOVE,
        todoId
      }
    });
  }

  completeTodo(todoId, complete) {
    Dispatcher.dispatch({
      source: 'VIEW_ACTION',
      action: {
        actionType: TodoConstants.COMPLETE,
        todoId,
        complete
      }
    });
  }

  searchTodo(predicate) {
    Dispatcher.dispatch({
      source: 'VIEW_ACTION',
      action: {
        actionType: TodoConstants.SEARCH,
        predicate
      }
    });
  }

}
export default new TodoActions();
