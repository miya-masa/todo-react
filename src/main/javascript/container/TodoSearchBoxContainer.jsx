import React from 'react';
import { connect } from 'react-redux';
import TodoSearchBox from '../component/TodoSearchBox.jsx';

class TodoSearchBoxContainer extends React.Component {

  constructor() {
    super();
    this.onChangeSearchBox = this.onChangeSearchBox.bind(this);
  }

  onChangeSearchBox(event) {
    //  TodoActions.searchTodo((todo) => todo.todo.indexOf(event.target.value) >= 0);
  }

  render() {
    return (
      <TodoSearchBox onChangeSearchBox={this.onChangeSearchBox} />
      );
  }
}
export default connect()(TodoSearchBoxContainer);
