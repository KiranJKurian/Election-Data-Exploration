import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import $ from "jquery";
import SelectField from './SelectField';
import { gotTableData } from '../actions/Tables';
import replaceAll from '../utils/replaceAll';

let Tables = (props) => {
  const { tableData, gotTableData, table } = props;
  const data = tableData && JSON.parse(tableData);
  const tables = data && data.map((table) => Object.keys(table)[0]);
  const getData = () => {
    $.ajax({
      url: "/db",
      method: "GET",
    }).done(function (data) {
      // console.log(data);
      gotTableData(data);
    });
  };

  getData();

	return (
		<Card style={{ margin: '1em' }}>
			<CardTitle>Tables</CardTitle>
      <CardText>
        {data &&
          (<article>
            <SelectField question="Table" options={tables} />
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  {data[tables.indexOf(table)] && data[tables.indexOf(table)][table][0] && Object.keys(data[tables.indexOf(table)][table][0]).map((rowName) => {
                      return (<TableHeaderColumn key={`${table}.${rowName}`}>{replaceAll(`${rowName}`, '_', ' ')}</TableHeaderColumn>);
                    })
                  }
                </TableRow>
              </TableHeader>
              <TableBody stripedRows displayRowCheckbox={false}>
                {data[tables.indexOf(table)] && data[tables.indexOf(table)][table].map((row, index) => (
                  <TableRow key={index}>
                    {Object.keys(row).map((rowName) => {
                      return (<TableRowColumn key={`${index}.${rowName}`}>{row[rowName]}</TableRowColumn>);
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </article>)}
      </CardText>
		</Card>
	)
}

// Decorate with redux-form
Tables = reduxForm({
  form: 'tables',
  initialValues: {
    Table: 'historical_results',
  },
})(Tables);

const mapStateToProps = (state, ownProps) => {
  return {
    tableData: state.tables.data,
    table: state.form.tables && state.form.tables.values.Table,
  }
}

const mapDispatchToProps = {
  gotTableData,
}

const ConnectedTables = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tables);

export default ConnectedTables;
