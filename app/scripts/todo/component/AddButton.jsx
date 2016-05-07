import React from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

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
