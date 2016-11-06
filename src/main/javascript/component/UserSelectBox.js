import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class UserSelectBox extends React.Component {

  render() {
    console.log(this.props.value);
    const menuItems = this.props.users.map(user => <MenuItem key={user.id} value={user.id} primaryText={user.name} />);

    return (
      <SelectField value={this.props.value} onChange={this.props.onChangeUser}>
        {menuItems}
      </SelectField>);
  }
}
