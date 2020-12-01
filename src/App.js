import React from 'react';

import logo from './logo.svg';
import './App.css';

import Context from './context/Index';
import DynamicContext from './context/dynamic-context/DynamicContext';

function App() {
  return (
    <div className="App">
      <DynamicContext />
    </div>
  );
}

export default App;
