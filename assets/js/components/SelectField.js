import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from 'material-ui/MenuItem';
import { Field } from 'redux-form';
import { SelectField as UnconnectedSelectField } from 'redux-form-material-ui';
import replaceAll from '../utils/replaceAll';

const SelectField = ({question, location, options}) => {
  return (
    <Field style={{ marginLeft: '.5em', marginRight: '.5em' }} name={location ? `${location}.${question}` : question} component={UnconnectedSelectField} hintText={question}>
      {options.map( (option) => (<MenuItem key={`${question}.${option}`} value={option} primaryText={replaceAll(`${option}`, '_', ' ')} />))}
    </Field>
  );
}

export default SelectField;
