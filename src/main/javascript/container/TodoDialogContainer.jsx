import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DialogActions from '../actions/DialogActions';
import { create } from '../actions/TodoActions';
import { load } from '../actions/UserActions';
import TodoDialog from '../component/TodoDialog.jsx';

function mapStateToProps(state) {
  let {users} = state.userReducer;
  users = users.map(user => {
    return {
      id: user.email,
      name: `${user.lastName} ${user.firstName}`
    };
  });
  return Object.assign({}, state.dialogReducer, {
    users
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, DialogActions, {
      load,
      create
    }), dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoDialog);
