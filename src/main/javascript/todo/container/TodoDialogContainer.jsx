import React from 'react';
import moment from 'moment';
import Joi from 'joi';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import TodoDialog from '../component/TodoDialog.jsx';
import AddButton from '../component/AddButton.jsx';

class TodoDialogContainer extends React.Component {

  constructor(props) {
    super(props);
    this.getValidatorData = this.getValidatorData.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeTodo = this.onChangeTodo.bind(this);
    this.onChangeLimitDate = this.onChangeLimitDate.bind(this);

    const language = {
      any: {
        required: '{{key}} は必須です。',
        empty: '{{key}} は必須です。'
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
      todo: '',
      limitDate: '',
      open: false,
      error: {}
    };
  }

  getValidatorData() {
    return this.state;
  }

  handleOpen() {
    this.setState({
      todo: '',
      limitDate: '',
      open: true,
      error: {}
    });
  }

  handleClose() {
    this.closeDialog();
  }

  closeDialog() {
    this.setState({
      open: false,
      error: {}
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

  onChangeTodo(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  onChangeLimitDate(noused, selectedDate) {
    const limitDate = moment(selectedDate).format('YYYY/MM/DD');
    this.setState({
      limitDate
    });
  }

  render() {
    return (
      <div>
        <AddButton handleAdd={this.handleOpen}/>
        <TodoDialog
      title="Todo追加"
      headerMessage="Todoを追加してみよう"
      handleSubmit={this.handleSubmit}
      handleCancel={this.handleClose}
      open={this.state.open}
      textTodoId="todo"
      textLimitDateId="limitDate"
      errorTodo={this.state.error.todo}
      errorLimitDate={this.state.error.limitDate}
      onChangeLimitDate={this.onChangeLimitDate}
      onChangeTodo={this.onChangeTodo}/>
      </div>
      );
  };

}
export default validation(strategy)(TodoDialogContainer);
