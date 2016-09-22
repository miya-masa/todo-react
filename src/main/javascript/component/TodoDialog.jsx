import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import TodoUserSelectBoxContainer from '../container/TodoUserSelectBoxContainer.jsx';

export default class TodoDialog extends React.Component {

  render() {
    const actions = [
      <FlatButton
      label="Cancel"
      secondary={true}
      onTouchTap={this.props.handleCancel}
      />,
      <FlatButton
      label="Submit"
      primary={true}
      disabled={false}
      onTouchTap={this.props.handleSubmit}
      />
    ];

    return (
      <Dialog title="Todo追加" actions={actions} modal={true} open={this.props.open} >
          <h3>Todoを追加してみよう</h3>
      <TextField
      id="todo"
      hintText="Todo Text"
      errorText={this.props.errorTodo}
      onChange={this.props.onChangeTodo}/>
      <DatePicker
      hintText="Limit Date"
      id="limitDate"
      errorText={this.props.errorLimitDate}
      onChange={this.props.onChangeLimitDate}
      DateTimeFormat={Intl.DateTimeFormat}
      locale="ja"/>
      <TodoUserSelectBoxContainer />
      </Dialog>
      );
  };
}
