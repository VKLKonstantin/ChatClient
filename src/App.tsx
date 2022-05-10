import React from 'react';
import './App.css';
import { Column } from './component/column';
import { Form } from './component/form/form';

function App() {
  return (
    <div className="App">
      Hello
      <Column>
        <Form />
      </Column>
    </div >
  );
}

export default App;
