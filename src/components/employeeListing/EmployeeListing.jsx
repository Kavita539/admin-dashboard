import React from "react";
import { useEmployee } from "../../context/Employeecontext";
import { useFilter } from "../../context/Filtercontext";
import DynamicTable from "@atlaskit/dynamic-table";
import { selectFilteredEmployees, sortEmployees } from "../../utils/filterMethods";
import { head } from "../../utils/tableDataHandler";

const EmployeeListing = () => {
const {state} = useFilter();
const { tableData }= useEmployee();
const sortedList = sortEmployees(state.sort, tableData);
const finalFilteredList = selectFilteredEmployees(state, sortedList);

// console.log("data", tableData);

function createKey(input) {
    return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
}

const rows = finalFilteredList.map((employeeObj) => ({
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
    <div className="employee-listing-table">
        <DynamicTable head={head} rows={rows} rowsPerPage={15} loadingSpinnerSize="large"/>
    </div>
  )
}

export default EmployeeListing