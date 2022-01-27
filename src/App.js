import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import ContextProvider from './ContextProvider';
import './App.css';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Route path="/" component={Login} />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
