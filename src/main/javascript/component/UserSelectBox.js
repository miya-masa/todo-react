import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class UserSelectBox extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.load();
  }

  handleChange(event, index, value) {
    this.props.handleChange(value);
  }

  render() {
    const menuItems = this.props.users.map(user => <MenuItem value={user.id} primaryText={user.name} />);

    return (
      <SelectField value={this.props.select} onChange={this.handleChange}>
        {menuItems}
      </SelectField>);
  }
}
