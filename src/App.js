import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import ContextProvider from './ContextProvider';
import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Route path="/" component={ Login } />
      </BrowserRouter>
    </ContextProvider>
    <div className="meals">
      <span className="logo">TRYBE</span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glas
      </object>
    </div>
  );
}

export default App;
