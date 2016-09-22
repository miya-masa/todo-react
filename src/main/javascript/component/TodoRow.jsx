import React from 'react';
import moment from 'moment';
import TableRowColumn from 'material-ui/Table/TableRowColumn';
import TableRow from 'material-ui/Table/TableRow';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Checkbox from 'material-ui/Checkbox';
import ContentRemove from 'material-ui/svg-icons/content/Remove';

export default class TodoRow extends React.Component {

  render() {
    const lineThroughStyle = {
      'textDecoration': this.props.todo.complete ? 'line-through' : 'none'
    };
    const limitDate = moment(this.props.todo.limitDate).format('YYYY/MM/DD');
    return (<TableRow key={this.props.todo.id}>
        <TableRowColumn style={lineThroughStyle}>{this.props.no}</TableRowColumn>
        <TableRowColumn style={lineThroughStyle}>{this.props.todo.code}</TableRowColumn>
        <TableRowColumn style={lineThroughStyle}>{this.props.todo.todo}</TableRowColumn>
        <TableRowColumn style={lineThroughStyle}>{limitDate}</TableRowColumn>
        <TableRowColumn>
          <Checkbox defaultChecked={this.props.todo.complete} onCheck={(event, value) => this.props.onChangeComplete(this.props.todo, value) }/>
        </TableRowColumn>
        <TableRowColumn>
          <FloatingActionButton mini={true} secondary={true} onTouchTap={(event, value) => this.props.onTouchRemove(this.props.todo) }>
            <ContentRemove />
          </FloatingActionButton>
        </TableRowColumn>
  </TableRow>);
  }
}
