import Dispatcher from './Dispatcher';
import TodoConstants from './TodoConstants';

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

}
export default new TodoActions();
