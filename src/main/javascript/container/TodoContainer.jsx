import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/lib/app-bar';
import TodoStore from '../store/TodoStore';
import { load, complete, create } from '../actions/TodoActions';
import TodoDialogContainer from './TodoDialogContainer.jsx';
import TodoGridTable from '../component/TodoGridTable.jsx';
import TodoSearchBox from '../component/TodoSearchBox.jsx';
import Container from '../component/Container.jsx';

class Todo extends React.Component {

  constructor() {
    super();
    this.changeTodoState = this.changeTodoState.bind(this);
    this.onChangeComplete = this.onChangeComplete.bind(this);
    this.onTouchRemove = this.onTouchRemove.bind(this);
    this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
    this.onChangeSearchBox = this.onChangeSearchBox.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(load());
  }

  changeTodoState(todos = TodoStore.getAllTodos()) {
    this.setState({
      todos
    });
  }

  onChangeComplete(todo, value) {
    //   TodoActions.completeTodo(todo.id, value);
    this.props.dispatch(complete(todo.id, value));
  }

  onTouchRemove(todo) {
    //   TodoActions.removeTodo(todo.id);
  }

  handleSubmitSuccess(todo, limitDate) {
    this.props.dispatch(create(todo, limitDate));
  }

  onChangeSearchBox(event) {
    //  TodoActions.searchTodo((todo) => todo.todo.indexOf(event.target.value) >= 0);
  }

  render() {
    return (
      <Container>
          <AppBar title="Todoリスト" showMenuIconButton={false} />
          <div>
            <TodoDialogContainer handleSubmit={this.handleSubmitSuccess} />
            <TodoSearchBox onChangeSearchBox={this.onChangeSearchBox}/>
            <div>
               <TodoGridTable todos={this.props.todos} onChangeComplete={this.onChangeComplete} onTouchRemove={this.onTouchRemove}/>
            </div>
          </div>
        </Container>
      );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todoReducer.todos
  };
}

export default connect(mapStateToProps)(Todo);
