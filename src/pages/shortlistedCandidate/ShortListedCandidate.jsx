import React from 'react';
import DynamicTable from "@atlaskit/dynamic-table";
import { useShortlist } from '../../context/ShortlistContext';
import { shortlistedHead } from '../../utils/tableDataHandler';
import "./shortlistedCandidate.css";

const ShortListedCandidate = () => {
    const {shortlisted} = useShortlist();
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
        key: createKey(employeeObj.company.address.address),
        content: employeeObj.company.address.address,
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
    ],
  }));
  
  return (
    <div className='shortlisted-container'>
      <h3>Shortlisted Candidate</h3>
      <DynamicTable head={shortlistedHead} rows={shortlistedRows} loadingSpinnerSize="large" />
    </div>
  )
}

export default ShortListedCandidate