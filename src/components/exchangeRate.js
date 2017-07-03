import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default (props) => {

  const renderExchangeRate = () => {
    return props.rates.map(curr => {
      return (
        <TableRow key={curr.buy}>
          <TableRowColumn>{curr.ccy}</TableRowColumn>
          <TableRowColumn>{curr.buy}</TableRowColumn>
        </TableRow>
      )
    })
  }

  return (
    <div className="exchange-rate">
      <Table showCheckboxes={false}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Currency</TableHeaderColumn>
              <TableHeaderColumn>Rate (UAH)</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showCheckboxes={false}>
            {renderExchangeRate()}
          </TableBody>
      </Table>
    </div>
  )
}
