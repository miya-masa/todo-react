import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DialogActions from '../actions/DialogActions';
import { create } from '../actions/TodoActions';
import TodoDialog from '../component/TodoDialog.jsx';
import { formValueSelector } from 'redux-form';
import _ from 'lodash';

function validate(state) {
  const error = {
    todo: '',
    limitDate: '',
    user: ''
  };
  if (_.isEmpty(state.get('todo'))) {
    error.todo = 'Todoは必須です';
  }

  if (_.isEmpty(state.get('limitDate'))) {
    error.limitDate = '期限は必須です';
  }

  if (_.isEmpty(state.get('user').id)) {
    error.user = '担当者は必須です';
  }
  const isValid = _.isEmpty(error.limitDate) && _.isEmpty(error.todo);
  return state.merge({
    error,
    isValid
  });
}

function mapStateToProps(state) {
  return state.dialogReducer.toJS();
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, DialogActions, {
      create
    }), dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoDialog);
