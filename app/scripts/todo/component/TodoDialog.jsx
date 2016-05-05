import React from 'react';
import moment from 'moment';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';

class TodoDialog extends React.Component {

  getValidatorData() {
    return this.state;
  }

  constructor() {
    super();
    const language = {
      any: {
        required: '{{key}} は必須です。'
      }
    };
    this.validatorTypes = {
      limitDate: Joi.string().required().label('Limit Date').options({
        language
      }),
      todo: Joi.string().required().label('Todo Text').options({
        language
      })
    };

    this.state = {
      open: false
    };
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.closeDialog();
  }

  closeDialog() {
    this.setState({
      open: false,
      error: undefined
    });
  }

  handleSubmit() {
    const onValidate = (error) => {
      console.log(error);
      if (error) {
        this.setState({
          error
        });
      } else {
        const [todo, limitDate] = [this.state.todo, this.state.limitDate];
        this.props.handleSubmit(todo, limitDate);
        this.closeDialog();
      }
    };
    this.props.validate(onValidate);
  }

  _onChangeTodo(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  _onChangeLimitDate(noused, selectedDate) {
    const limitDate = moment(selectedDate).format('YYYY/MM/DD');
    this.setState({
      limitDate
    });
  }

  render() {
    const actions = [
      <FlatButton
      label='Cancel'
      secondary={true}
      onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
      label='Submit'
      primary={true}
      disabled={false}
      onTouchTap={this.handleSubmit.bind(this)}
      />
    ];

    const style = {
      marginLeft: 20,
      marginTop: 10
    };

    return (
      <div>
        <FloatingActionButton style={style} onTouchTap={this.handleOpen.bind(this)} >
          <ContentAdd />
        </FloatingActionButton>
        <Dialog title= 'Todo追加' actions={actions} modal={true} open={this.state.open} >
          <h3>Todo追加してみよう</h3>
            <TextField id='todo' hintText='Todo Text' errorText={this.state.error ? this.state.error.todo : ''} onChange={this._onChangeTodo}/>
            <DatePicker hintText='Limit Date' id='limitDate' errorText={this.state.error ? this.state.error.limitDate : ''} onChange={this._onChangeLimitDate} DateTimeFormat={Intl.DateTimeFormat} locale='ja'/>
        </Dialog>
      </div>
      );
  };

}
export default validation(strategy)(TodoDialog);
