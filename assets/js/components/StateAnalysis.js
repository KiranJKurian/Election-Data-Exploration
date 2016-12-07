import React from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import $ from "jquery";
import SelectField from './SelectField';
import electionConfig from '../data/election_config';
import { submitStateAnalysisNormalQuery } from '../actions/StateAnalysis';

let StateAnalysis = (props) => {
  const { normal, custom, submitStateAnalysisNormalQuery } = props;
  const colNames = electionConfig.state_info.column_names;
  const onNormalSubmit = () => $.ajax({
      url: "/dropDown",
      data: { 'year': normal.input.year, 'highlow': normal.input.highLow, 'attribute': normal.input.attribute },
      method: "GET",
    }).done(function (data) {
      console.log(data);
      submitStateAnalysisNormalQuery( JSON.parse(data)[0].State );
  });

  const onCustomSubmit = () => $.ajax({
      url: "/poll1",
      data: { 'year': custom.input.year, 'highlow': custom.input.highLow, 'attribute': custom.input.attribute, 'party': custom.input.party, 'number': custom.input.number },
      method: "GET",
    }).done(function (data) {
      console.log(data);
      submitStateAnalysisNormalQuery( JSON.parse(data)[0].State );
  });

  console.log(normal.result);
  return (
    <Card>
      <CardTitle>State Analysis</CardTitle>
      <CardText>
        <article>
          Select
          <SelectField location="normal" question="Year" options={[2016,2012,2004,2000]} />
        </article>
        <article>
          Which state has the
          <SelectField location="normal" question="High/Low" options={['lowest', 'highest']} />
          <SelectField location="normal" question="Attribute" options={ colNames.filter( ({year}) => (normal.input && year === normal.input.year))
            .map( ({name}) => name) } />
        </article>
      </CardText>
      <CardActions>
        <FlatButton onClick={onNormalSubmit} label="Submit" />
        <span>Result: {normal.result ? normal.result : 'N/A'}</span>
      </CardActions>
    </Card>
  );
}

// Decorate with redux-form
StateAnalysis = reduxForm({
  form: 'stateAnalysis',
  initialValues: {
    normal: {
      Year: 2016,
      'High/Low': 'lowest',
      'Attribute': 'Population_estimate_2014',
    },
    custom: {
      Year: 2016,
      'High/Low': 'lowest',
      'Attribute': 'Population_estimate_2014',
      'Party': 'Dem',
      'Number': 1,
    },
  },
})(StateAnalysis)

const mapStateToProps = (state, ownProps) => {
  return {
    normal: {
      result: state.stateAnalysis.normal && state.stateAnalysis.normal.result,
      input: state.form.stateAnalysis && {
        year: state.form.stateAnalysis.values.normal.Year,
        highLow: state.form.stateAnalysis.values.normal['High/Low'],
        attribute: state.form.stateAnalysis.values.normal.Attribute,
      }
    },
    custom: {
      result: state.stateAnalysis.custom && state.stateAnalysis.custom.result,
      input: state.form.stateAnalysis && {
        year: state.form.stateAnalysis.values.custom.Year,
        highLow: state.form.stateAnalysis.values.custom['High/Low'],
        attribute: state.form.stateAnalysis.values.custom.Attribute,
        party: state.form.stateAnalysis.values.custom.Party,
        number: state.form.stateAnalysis.values.custom.Number,
      }
    },
  }
}

const mapDispatchToProps = {
  submitStateAnalysisNormalQuery,
}

const ConnectedStateAnalysis = connect(
  mapStateToProps,
  mapDispatchToProps
)(StateAnalysis);

export default ConnectedStateAnalysis;
