// import { useState } from 'react';
import EmployeeListing from "../../components/employeeListing/EmployeeListing";
import FilterList from "../../components/filterList/FilterList";
import Navbar from "../../components/navbar/Navbar";
import EmployeeDataModal from '../../components/employeeDataModal/EmployeeDataModal';
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
      {/* <EmployeeDataModal/> */}
      </div>
    </div>
  )
}

export default Home