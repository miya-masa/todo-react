import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from '../component/Loader.jsx';

function mapStateToProps(state) {
  return {
    status: state.loaderReducer.get('status')
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
