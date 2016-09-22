import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { open, close } from '../actions/DialogActions';
import { create } from '../actions/TodoActions';
import moment from 'moment';
import TodoDialog from '../component/TodoDialog.jsx';
import AddButton from '../component/AddButton.jsx';

class TodoDialogContainer extends React.Component {

  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeTodo = this.onChangeTodo.bind(this);
    this.onChangeLimitDate = this.onChangeLimitDate.bind(this);
  }

  handleOpen() {
    this.props.open();
  }

  handleClose() {
    this.props.close();
  }

  handleSubmit() {
    const {todo, limitDate} = this.props;
    this.props.create(todo, limitDate);
  }

  onChangeTodo(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  onChangeLimitDate(noused, selectedDate) {
    const limitDate = moment(selectedDate).format('YYYY-MM-DDT00:00:00');
    this.setState({
      limitDate
    });
  }

  render() {
    return (
      <div>
        <AddButton handleAdd={this.handleOpen}/>
        <TodoDialog
      handleSubmit={this.handleSubmit}
      handleCancel={this.handleClose}
      open={this.props.openDialog}
      errorTodo={this.props.error.todo}
      errorLimitDate={this.props.error.limitDate}
      onChangeLimitDate={this.onChangeLimitDate}
      onChangeTodo={this.onChangeTodo} />
      </div>
      );
  };

}

function mapStateToProps(state) {
  return state.dialogReducer;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    open,
    close,
    create
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoDialogContainer);
