import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardText, CardTitle, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import tests from '../tests/tests';

const Test = (props) => {
  tests();

  return (
    <div>
      <Card style={{ margin: '1em' }}>
        <CardTitle>Tests</CardTitle>
        <CardActions>
          <FlatButton onClick={tests} label="Test" />
        </CardActions>
      </Card>
    </div>
  );
}

export default Test;
