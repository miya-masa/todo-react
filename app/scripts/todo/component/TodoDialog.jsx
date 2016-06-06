import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TextField from 'material-ui/lib/text-field';

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
      <Dialog title={this.props.title} actions={actions} modal={true} open={this.props.open} >
          <h3>{this.props.headerMessage}</h3>
          <TextField
      id={this.props.textTodoId}
      hintText="Todo Text"
      errorText={this.props.errorTodo}
      onChange={this.props.onChangeTodo}/>
    <DatePicker
      hintText="Limit Date"
      id={this.props.textLimitDateId}
      errorText={this.props.errorLimitDate}
      onChange={this.props.onChangeLimitDate}
      DateTimeFormat={Intl.DateTimeFormat}
      locale="ja"/>
        </Dialog>
      );
  };
}
