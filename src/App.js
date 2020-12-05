import React from 'react';

import logo from './logo.svg';
import './App.css';

import Context from './context/Index';
import DynamicContext from './context/dynamic-context/DynamicContext';
import NestedContextUpdate from "./context/nested-context-update/NestedContextUpdate";
import MultipleContext from "./context/multiple-context/MultipleContext";
import ErrorBoundary from "./error-boundary/ErrorBoundary";
import ForwardRefsExample from "./forwarding-refs/Index";
import RefsWithHoc from "./forwarding-refs/refs-with-hoc/RefsWithHoc";

function App() {
  return (
    <div className="App">
        <ErrorBoundary>
            <RefsWithHoc/>
        </ErrorBoundary>
    </div>
  );
}

export default App;
