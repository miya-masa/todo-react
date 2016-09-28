import React from 'react';
import _ from 'lodash';
import TodoRow from './TodoRow.jsx';
import Table from 'material-ui/Table/Table';
import TableHeaderColumn from 'material-ui/Table/TableHeaderColumn';
import TableHeader from 'material-ui/Table/TableHeader';
import TableBody from 'material-ui/Table/TableBody';
import TableRow from 'material-ui/Table/TableRow';

export default class TodoGridTable extends React.Component {

  constructor() {
    super();
    this.onChangeComplete = this.onChangeComplete.bind(this);
  }

  componentDidMount() {
    this.props.load();
  }

  onChangeComplete(todo, value) {
    this.props.complete(todo.id, value);
  }

  render() {
    const rows = this.props.todos.map((e, index) => <TodoRow todo={e} no={_.padStart(index + 1, 4, '0')} key={e.code} onTouchRemove={this.props.onTouchRemove} onChangeComplete={this.onChangeComplete} />);

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
