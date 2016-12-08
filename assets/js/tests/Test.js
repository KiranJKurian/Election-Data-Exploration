import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardText, CardTitle } from 'material-ui/Card';
import tests from '../tests/tests';

const Test = (props) => {
  tests();

  return (
    <div>
      <Card style={{ margin: '1em' }}>
        <CardTitle>Tests</CardTitle>
        <CardText>
          <article>
            Tests
          </article>
        </CardText>
      </Card>
    </div>
  );
}

export default Test;
