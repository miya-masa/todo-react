import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TodoDialogContainer from './TodoDialogContainer.jsx';
import TodoSearchBoxContainer from './TodoSearchBoxContainer.jsx';
import TodoGridTableContainer from './TodoGridTableContainer.jsx';
import LoaderContainer from './LoaderContainer.jsx';
import { load } from '../actions/UserActions';
import Container from '../component/Container.jsx';

class Todo extends React.Component {

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme)
    };
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <Container>
        <LoaderContainer />
          <AppBar title="Todoリスト" showMenuIconButton={false} />
          <div>
            <TodoDialogContainer />
            <TodoSearchBoxContainer />
            <TodoGridTableContainer />
        </div>
        </Container>
      );
  }
}

Todo.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, {
      load
    }), dispatch);
}

export default connect(state => state, mapDispatchToProps)(Todo);
