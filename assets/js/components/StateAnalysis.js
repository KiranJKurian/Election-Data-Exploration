import React from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import $ from "jquery";
import SelectField from './SelectField';
import NumberField from './NumberField';
import electionConfig from '../data/election_config';
import { submitStateAnalysisNormalQuery } from '../actions/StateAnalysis';

let StateAnalysis = (props) => {
  const { normal, custom, submitStateAnalysisNormalQuery } = props;
  const colNames = electionConfig.state_info.column_names;

  const normalData = normal.input && { 'type': 'stateAnalysisNormal', 'year': normal.input.year, 'highlow': normal.input.highLow, 'attribute': normal.input.attribute };
  const customData = custom.input && { 'type': 'stateAnalysisCustom', 'year': custom.input.year, 'highlow': custom.input.highLow, 'attribute': custom.input.attribute, 'party': custom.input.party, 'number': custom.input.number };

  const submit = (data) => $.ajax({
      url: "/query",
      data: JSON.stringify(data),
      contentType: 'application/json',
      method: "POST",
    }).done(function (data) {
      console.log(data);
      submitStateAnalysisNormalQuery( JSON.parse(data)[0].State );
  });
  const onNormalSubmit = () => submit(normalData);


  const onCustomSubmit = () => submit(customData);

  console.log(normal.result);
  return (
    <div>
      <Card>
        <CardTitle>State Analysis Normal</CardTitle>
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
      <Card>
        <CardTitle>State Analysis Custom</CardTitle>
        <CardText>
          <article>
            Select
            <SelectField location="custom" question="Year" options={[2016,2012,2004,2000]} />
          </article>
          <article>
            States where
            <SelectField location="custom" question="Attribute" options={ colNames.filter( ({year}) => (custom.input && year === custom.input.year))
              .map( ({name}) => name) } />
            <SelectField location="custom" question="Less/Greater" options={['less', 'greater']} />
            than
            <NumberField location="custom" question="Number" />
            and the winning party was
            <SelectField location="custom" question="Party" options={["Dem", "GOP", "Ind"]} />
          </article>
        </CardText>
        <CardActions>
          <FlatButton onClick={onCustomSubmit} label="Submit" />
          <span>Result: {custom.result ? custom.result : 'N/A'}</span>
        </CardActions>
      </Card>
    </div>
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
      'Less/Greater': 'less',
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
        highLow: state.form.stateAnalysis.values.custom['Less/Greater'],
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
