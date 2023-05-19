import React from 'react';
import DynamicTable from "@atlaskit/dynamic-table";
import Button from '@atlaskit/button/standard-button';
import { useShortlist } from '../../context/ShortlistContext';
import { shortlistedHead } from '../../utils/tableDataHandler';
import "./shortlistedCandidate.css";
import Navbar from '../../components/navbar/Navbar';

const ShortListedCandidate = () => {
    const {shortlisted, setShortlisted} = useShortlist();
    const unShortListHandler = (id) => {
      const filteredCandidate = shortlisted.filter((data)=> data.id !== id );
      // console.log("cand", filteredCandidate);
      setShortlisted(filteredCandidate)
    }
    function createKey(input) {
      return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
  }

  const shortlistedRows = shortlisted.map((employeeObj) => ({
    key: employeeObj.id,
    cells: [
      
      {
        key: createKey(employeeObj.firstName),
        content: <p> {employeeObj.firstName}</p>,
      },
      {
        key: createKey(employeeObj.lastName),
        content: <p> {employeeObj.lastName}</p>,
      },
      {
        key: createKey(employeeObj.company.name),
        content: employeeObj.company.name,
      },
      {
        key: createKey(employeeObj.bloodGroup),
        content: <p>{employeeObj.bloodGroup}</p>,
      },
      {
        key: createKey(employeeObj.email),
        content: employeeObj.email,
      },
      {
        key: createKey(employeeObj.phone),
        content: employeeObj.phone,
      },
      {
        key: employeeObj.id,
        content: <Button appearance="primary" onClick={()=>unShortListHandler(employeeObj.id)}>Unshortlist</Button>
      }
    ],
  }));
  
  return (
    <>
    <Navbar/>
    <div className='shortlisted-container'>
      <h3>Shortlisted Candidates</h3>
      {shortlisted.length ? (<DynamicTable head={shortlistedHead} rows={shortlistedRows} loadingSpinnerSize="large" />) : (<h1>No data found</h1>)}
    </div>
    </>
  )
}

export default ShortListedCandidate