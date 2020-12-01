import React from 'react';

import logo from './logo.svg';
import './App.css';

import Context from './context/Index';
import DynamicContext from './context/dynamic-context/DynamicContext';
import NestedContextUpdate from "./context/nested-context-update/NestedContextUpdate";

function App() {
  return (
    <div className="App">
        <NestedContextUpdate />
    </div>
  );
}

export default App;
