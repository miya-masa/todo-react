import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { load } from '../actions/UserActions';
import UserSelectBox from '../component/UserSelectBox';

function mapStateToProps(state, ownProps) {
  let {users} = state.userReducer;
  users = users.map(user => {
    return {
      id: user.email,
      name: `${user.lastName} ${user.firstName}`
    };
  });
  return Object.assign({}, ownProps, {
    users: users
  });
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    load
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSelectBox);
