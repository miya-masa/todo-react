import React from 'react';
import TextField from 'material-ui/lib/text-field';
import TodoActions from '../app/TodoActions';

export default class TodoSearchBox extends React.Component {

  _onChangeSearchBox(event) {
    TodoActions.searchTodo((todo) => todo.todo.indexOf(event.target.value) >= 0);
  }

  render() {
    return (
      <div>
        Todo検索 :
      <TextField onChange={this._onChangeSearchBox}/>
    </div>
      );
  }

}
