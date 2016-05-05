import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import TodoStore from '../store/TodoStore';
import TodoActions from '../app/TodoActions';

export default class Todo extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAllTodos()
    };
  }

  componentDidMount() {
    TodoStore.addListener(this.onChange.bind(this));
  }

  componentWillUnMount() {
    TodoStore.removeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState({
      todos: TodoStore.getAllTodos()
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
          <div>
            <TodoGridTable todos={this.state.todos} onChangeComplete={this.onChangeComplete} onTouchRemove={this.onTouchRemove}/>
          </div>
        </div>
      </div>
      );
  }
}
