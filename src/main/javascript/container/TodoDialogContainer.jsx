import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DialogActions from '../actions/DialogActions';
import { create } from '../actions/TodoActions';
import TodoDialog from '../component/TodoDialog.jsx';

function mapStateToProps(state) {
  const users = state.userReducer.get('users').toArray().map(user => {
    return {
      id: user.id,
      email: user.email,
      link: user._links.self.href,
      name: `${user.lastName} ${user.firstName}`
    };
  });
  return Object.assign({}, state.dialogReducer.toObject(), {
    users
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, DialogActions, {
      create
    }), dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoDialog);
