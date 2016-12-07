import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from 'material-ui/MenuItem';
import { Field } from 'redux-form';
import { TextField as TextField } from 'redux-form-material-ui';

const NumberField = ({question, location, options}) => {
  return (
    <Field style={{ marginLeft: '.5em', marginRight: '.5em' }} name={location ? `${location}.${question}` : question} type="number" component={TextField} hintText={question} />
  );
}

export default NumberField;
