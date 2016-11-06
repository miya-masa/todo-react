import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { load } from '../actions/UserActions';
import UserSelectBox from '../component/UserSelectBox';

function mapStateToProps(state, ownProps) {
  const users = state.userReducer.get('users').toArray().map(user => {
    return {
      id: user.id,
      email: user.email,
      link: user._links.self.href,
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
