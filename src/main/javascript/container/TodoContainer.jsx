import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TodoDialogContainer from './TodoDialogContainer.jsx';
import TodoSearchBoxContainer from './TodoSearchBoxContainer.jsx';
import TodoGridTableContainer from './TodoGridTableContainer.jsx';
import Container from '../component/Container.jsx';

export default class Todo extends React.Component {

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme)
    };
  }

  render() {
    return (
      <Container>
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
