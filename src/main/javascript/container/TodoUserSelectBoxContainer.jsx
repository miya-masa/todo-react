import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { load } from '../actions/UserActions';
import { changeUser } from '../actions/DialogActions';
import UserSelectBox from '../component/UserSelectBox';

function mapStateToProps(state) {
  let {users} = state.userReducer;
  const {select} = state.dialogReducer;
  users = users.map(user => {
    return {
      id: user.email,
      name: `${user.lastName} ${user.firstName}`
    };
  });
  return {
    users,
    select
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    load,
    handleChange: changeUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSelectBox);
