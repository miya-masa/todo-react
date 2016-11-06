import React from 'react';
import AddButton from '../component/AddButton.jsx';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import TodoUserSelectBoxContainer from '../container/TodoUserSelectBoxContainer.jsx';

export default class TodoDialog extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeTodo = this.onChangeTodo.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeLimitDate = this.onChangeLimitDate.bind(this);
  }

  handleSubmit() {
    const {todo, limitDate, user} = this.props;
    this.props.clear();
    this.props.close();
    this.props.create(todo, limitDate, user);
  }

  onChangeTodo(event) {
    this.props.onChangeTodo(event.target.value);
  }

  onChangeLimitDate(noused, selectedDate) {
    this.props.onChangeLimitDate(selectedDate);
  }

  onChangeUser(event, index, value) {
    this.props.onChangeUser(value);
  }

  render() {
    const actions = [
      <FlatButton
      label="Cancel"
      secondary={true}
      onTouchTap={this.props.cancel}
      />,
      <FlatButton
      label="Submit"
      primary={true}
      disabled={false}
      onTouchTap={this.handleSubmit}
      />
    ];
    return (
      <div>
        <AddButton handleAdd={this.props.open}/>
      <Dialog title="Todo追加" actions={actions} autoOk={true} open={this.props.openDialog} >
          <h3>Todoを追加してみよう</h3>
      <TextField
      id="todo"
      hintText="Todo Text"
      errorText={this.props.errorTodo}
      onChange={this.onChangeTodo}/>
      <DatePicker
      hintText="Limit Date"
      id="limitDate"
      errorText={this.props.errorLimitDate}
      onChange={this.onChangeLimitDate}
      DateTimeFormat={Intl.DateTimeFormat}
      locale="ja"/>
      <TodoUserSelectBoxContainer value={this.props.user} onChangeUser={this.onChangeUser} />
      </Dialog>
      </div>
      );
  };
}
