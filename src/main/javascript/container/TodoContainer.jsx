import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
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
    const style = {
      loader: {
        display: 'inline-block',
        'z-index': 10000
      },
      container: {
        'background-color': '#000000', // 好みで
        'opacity': '0.3',
        'position': 'abolute',
        'position' : 'fixed',
        'top': 0,
        'left': 0,
        'bottom': 0,
        'right': 0,
        'z-index': 200000
      }
    };

    return (
      <Container>
        <div style={style.container}>
        <RefreshIndicator status="loading" left={window.innerWidth / 2} top={window.innerHeight / 3} size={100} style={style.loader}/>
          <AppBar title="Todoリスト" showMenuIconButton={false} />
          <div>
            <TodoDialogContainer />
            <TodoSearchBoxContainer />
            <TodoGridTableContainer />
          </div>
        </div>
        </Container>
      );
  }
}

Todo.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};
