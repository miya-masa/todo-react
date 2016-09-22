import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/Add';

export default class extends React.Component {

  render() {
    const style = {
      marginLeft: 20,
      marginTop: 10
    };
    return (
      <FloatingActionButton style={style} onTouchTap={this.props.handleAdd} >
            <ContentAdd />
        </FloatingActionButton>
      );
  }
}
