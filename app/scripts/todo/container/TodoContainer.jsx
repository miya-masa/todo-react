import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import TodoStore from '../store/TodoStore';
import TodoActions from '../actions/TodoActions';
import TodoDialogContainer from './TodoDialogContainer.jsx';
import TodoGridTable from '../component/TodoGridTable.jsx';
import TodoSearchBox from '../component/TodoSearchBox.jsx';
import Container from '../component/Container.jsx';

export default class Todo extends React.Component {

  constructor() {
    super();
    this.changeTodoState = this.changeTodoState.bind(this);
    this.onChangeComplete = this.onChangeComplete.bind(this);
    this.onTouchRemove = this.onTouchRemove.bind(this);
    this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
    this.onChangeSearchBox = this.onChangeSearchBox.bind(this);

    this.state = {
      todos: TodoStore.getAllTodos()
    };
  }

  componentDidMount() {
    TodoStore.addListener(this.changeTodoState);
  }

  componentWillUnMount() {
    TodoStore.removeListener(this.changeTodoState);
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
      <Container>
        <AppBar title="Todoリスト" showMenuIconButton={false} />
        <div>
          <TodoDialogContainer handleSubmit={this.handleSubmitSuccess} />
          <TodoSearchBox onChangeSearchBox={this.onChangeSearchBox}/>
          <div>
            <TodoGridTable todos={this.state.todos} onChangeComplete={this.onChangeComplete} onTouchRemove={this.onTouchRemove}/>
          </div>
        </div>
      </Container>
      );
  }
}
