import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load, complete, remove } from '../actions/TodoActions';
import TodoGridTable from '../component/TodoGridTable.jsx';

function mapStateToProps(state) {
  return {
    todos: state.todoReducer.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      load,
      complete,
      onTouchRemove: remove
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoGridTable);
