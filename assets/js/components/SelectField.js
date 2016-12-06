import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from 'material-ui/MenuItem';
import { Field } from 'redux-form';
import { SelectField as UnconnectedSelectField } from 'redux-form-material-ui';

const SelectField = ({question, options}) => {
  return (
    <Field style={{ marginLeft: '.5em', marginRight: '.5em' }} name={question} component={UnconnectedSelectField} hintText={question}>
      {options.map( (option) => (<MenuItem key={`${question}.${option}`} value={option} primaryText={option} />))}
    </Field>
  );
}

export default SelectField;
