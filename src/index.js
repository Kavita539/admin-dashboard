import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import '@atlaskit/css-reset';
import { EmployeeProvider } from './context/Employeecontext';
import { FilterProvider } from './context/Filtercontext';
import { BrowserRouter as Router } from "react-router-dom";
import { ShortlistProvider } from './context/ShortlistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <EmployeeProvider>
      <ShortlistProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
      </ShortlistProvider>
    </EmployeeProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
