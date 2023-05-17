// import { useState } from 'react';
import EmployeeListing from "../../components/employeeListing/EmployeeListing";
import FilterList from "../../components/filterList/FilterList";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="nav-container">
      <Navbar/>
      </div>
      <div className="employee-container">
      <FilterList/>
      <EmployeeListing />
      </div>
    </div>
  )
}

export default Home