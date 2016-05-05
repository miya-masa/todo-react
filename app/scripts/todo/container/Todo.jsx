import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import TodoStore from '../store/TodoStore';
import TodoActions from '../app/TodoActions';
import TodoDialog from '../component/TodoDialog.jsx';
import TodoGridTable from '../component/TodoGridTable.jsx';
import TodoSearchBox from '../component/TodoSearchBox.jsx';

export default class Todo extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAllTodos()
    };
  }

  componentDidMount() {
    TodoStore.addListener(this.changeTodoState.bind(this));
  }

  componentWillUnMount() {
    TodoStore.removeListener(this.changeTodoState.bind(this));
  }

  changeTodoState(todos = TodoStore.getAllTodos()) {
    this.setState({
      todos
    });
  }

  onChangeComplete(todo, value) {
    TodoActions.completeTodo(todo.id, value);
  }

  onTouchRemove(todo) {
    TodoActions.removeTodo(todo.id);
  }

  onSubmitTodoSuccess(todo, limitDate) {
    TodoActions.createTodo(todo, limitDate);
  }

  render() {
    return (
      <div className='container'>
        <AppBar title='Todoリスト' showMenuIconButton={false} />
        <div>
          <TodoDialog handleSubmit={this.onSubmitTodoSuccess} />
          <TodoSearchBox />
          <div>
            <TodoGridTable todos={this.state.todos} onChangeComplete={this.onChangeComplete} onTouchRemove={this.onTouchRemove}/>
          </div>
        </div>
      </div>
      );
  }
}
