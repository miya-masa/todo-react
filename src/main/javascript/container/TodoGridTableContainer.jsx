import React from 'react';
import { connect } from 'react-redux';
import { load, complete } from '../actions/TodoActions';
import TodoGridTable from '../component/TodoGridTable.jsx';

class TodoGridTableContainer extends React.Component {

  constructor() {
    super();
    this.onChangeComplete = this.onChangeComplete.bind(this);
    this.onTouchRemove = this.onTouchRemove.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(load());
  }

  onChangeComplete(todo, value) {
    this.props.dispatch(complete(todo.id, value));
  }

  onTouchRemove(todo) {
    //   TodoActions.removeTodo(todo.id);
  }

  render() {
    return (
      <div>
        <TodoGridTable todos={this.props.todos} onChangeComplete={this.onChangeComplete} onTouchRemove={this.onTouchRemove}/>
      </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todoReducer.todos
  };
}

export default connect(mapStateToProps)(TodoGridTableContainer);
