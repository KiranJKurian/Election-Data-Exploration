import React from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import SelectField from './SelectField';
import electionConfig from '../data/election_config';
import { submitStateAnalysisNormalQuery } from '../actions/StateAnalysis';

let StateAnalysis = (props) => {
  const { normal, submitStateAnalysisNormalQuery } = props;
  const onSubmit = () => submitStateAnalysisNormalQuery( normal.input );
  console.log(normal.result);
  return (
    <Card>
      <CardTitle>State Analysis</CardTitle>
      <CardText>
        <article>
          Select
          <SelectField question="Year" options={[2016,2012,2004,2000]} />
        </article>
        <article>
          Which state has the
          <SelectField question="High/Low" options={['lowest', 'highest']} />
          than
          <SelectField question="Attribute" options={electionConfig.state_info.column_names} />
        </article>
      </CardText>
      <CardActions>
        <FlatButton onClick={onSubmit} label="Submit" />
      </CardActions>
    </Card>
  );
}

// Decorate with redux-form
StateAnalysis = reduxForm({
  form: 'stateAnalysis',
  initialValues: {
    normal: {},
  }
})(StateAnalysis)

const mapStateToProps = (state, ownProps) => {
  return {
    normal: {
      result: state.stateAnalysis.normal.result,
      input: state.form.stateAnalysis && {
        year: state.form.stateAnalysis.values.Year,
        highLow: state.form.stateAnalysis.values['High/Low'],
        attribute: state.form.stateAnalysis.values.Attribute,
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
