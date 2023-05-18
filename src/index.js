import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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

