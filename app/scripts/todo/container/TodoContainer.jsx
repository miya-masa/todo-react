import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import TodoStore from '../store/TodoStore';
import TodoActions from '../actions/TodoActions';
import TodoDialogContainer from './TodoDialogContainer.jsx';
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

  handleSubmitSuccess(todo, limitDate) {
    TodoActions.createTodo(todo, limitDate);
  }

  onChangeSearchBox(event) {
    TodoActions.searchTodo((todo) => todo.todo.indexOf(event.target.value) >= 0);
  }

  render() {
    return (
      <div className='container'>
        <AppBar title='Todoリスト' showMenuIconButton={false} />
        <div>
          <TodoDialogContainer handleSubmit={this.handleSubmitSuccess.bind(this)} />
          <TodoSearchBox onChangeSearchBox={this.onChangeSearchBox.bind(this)}/>
          <div>
            <TodoGridTable todos={this.state.todos} onChangeComplete={this.onChangeComplete.bind(this)} onTouchRemove={this.onTouchRemove.bind(this)}/>
          </div>
        </div>
      </div>
      );
  }
}
