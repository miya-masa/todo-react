import React from 'react';
import _ from 'lodash';
import TodoRow from './TodoRow.jsx';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableHeader from 'material-ui/lib/table/table-header';
import TableBody from 'material-ui/lib/table/table-body';
import TableRow from 'material-ui/lib/table/table-row';

export default class TodoGridTable extends React.Component {

  render() {
    const rows = this.props.todos.map((e, index) => <TodoRow todo={e} no={_.padStart(index + 1, 4, '0')} key={e.id} onTouchRemove={this.props.onTouchRemove} onChangeComplete={this.props.onChangeComplete} />);

    return (
      <Table selectable={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow >
        <TableHeaderColumn>No</TableHeaderColumn>
        <TableHeaderColumn>Code</TableHeaderColumn>
        <TableHeaderColumn>Todo</TableHeaderColumn>
        <TableHeaderColumn>Limit Date</TableHeaderColumn>
        <TableHeaderColumn>Complete</TableHeaderColumn>
        <TableHeaderColumn>Delete</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} >
      {rows}
    </TableBody>
  </Table>);
  }
}
