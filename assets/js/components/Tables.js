import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import $ from "jquery";
import SelectField from './SelectField';
import { gotTableData } from '../actions/Tables';

const Tables = (props) => {
  const { tableData, gotTableData } = props;
  const data = JSON.parse(tableData);
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
		<div>
			Tables
      {data &&
        (<article>
          <SelectField location="tables" question="Table" options={data.map((table) => Object.keys(table)[0])} />
        </article>)
      }
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
  return {
    tableData: state.tables.data,
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
