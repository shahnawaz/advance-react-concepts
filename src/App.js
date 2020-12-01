import React from 'react';

import logo from './logo.svg';
import './App.css';

import Context from './context/Index';
import DynamicContext from './context/dynamic-context/DynamicContext';
import NestedContextUpdate from "./context/nested-context-update/NestedContextUpdate";
import MultipleContext from "./context/multiple-context/MultipleContext";

function App() {
  return (
    <div className="App">
        <MultipleContext theme='dark' signedInUser={{name: 'Shahnawaz'}} />
    </div>
  );
}

export default App;
