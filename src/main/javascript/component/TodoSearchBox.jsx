import React from 'react';
import TextField from 'material-ui/TextField';

export default class TodoSearchBox extends React.Component {

  render() {
    return (
      <div>
        <label> Todo検索 : </label>
        <TextField onChange={this.props.onChangeSearchBox}/>
    </div>
      );
  }
}
