import React from 'react';
import AddButton from '../component/AddButton.jsx';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import TodoUserSelectBoxContainer from '../container/TodoUserSelectBoxContainer.jsx';
import { Field, reduxForm } from 'redux-form';

const renderTextField = props => (<TextField
  id={props.name}
  hintText={props.label}
  errorText={props.meta.error}
  onChange={props.input.onChange}
  />);

const renderDatePicker = props => {
  console.log(props.input);
  return (<DatePicker
    hintText={props.label}
    id={props.name}
    errorText={props.meta.error}
    DateTimeFormat={Intl.DateTimeFormat}
    onChange={(noused, selectedDate) => props.input.onChange(selectedDate)}
    locale="ja"/>);
};

class TodoDialog extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
  }

  handleSubmit() {
    const {todo, limitDate, user} = this.props;
    this.props.clear();
    this.props.close();
    this.props.create(todo, limitDate, user);
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
    console.log(this.props.limitDate);
    return (
      <div>
        <AddButton handleAdd={this.props.open}/>
      <Dialog title="Todo追加" actions={actions} autoOk={true} open={this.props.openDialog} >
          <h3>Todoを追加してみよう</h3>
          <Field name="todo" component={renderTextField} label="Todo Text" />
          <Field name="limitDate" component={renderDatePicker} label="Limit Date" />
      <TodoUserSelectBoxContainer value={this.props.user} onChangeUser={this.onChangeUser} />
      </Dialog>
      </div>
      );
  };
}
export default reduxForm({
  form: 'todoDialog'
})(TodoDialog);
