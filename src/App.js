import React, { Fragment } from 'react';
import './App.scss';

import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <Fragment>
      <Header title="Form validation using hooks" />
      <Form />
    </Fragment>
  );
}

export default App;
