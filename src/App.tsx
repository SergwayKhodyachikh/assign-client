import { Landing } from 'landing';
import history from 'navigation/history';
import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Router history={history}>
        <Landing />
      </Router>
    </Fragment>
  );
}

export default App;
