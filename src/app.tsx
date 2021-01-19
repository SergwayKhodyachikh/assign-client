import { Registration } from 'auth/registration';
import { Landing } from 'landing';
import { history } from 'navigation';
import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Router history={history}>
        <Registration />
      </Router>
    </Fragment>
  );
}

export default App;
