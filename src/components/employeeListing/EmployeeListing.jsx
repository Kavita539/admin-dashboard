import React, { useState, useEffect } from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import axios from "axios";
import { head } from "../../utils/tableDataHandler";

const EmployeeListing = () => {
const [tableData, setTableData] = useState([]);

useEffect(() => {
    (async () => {
        try {
            const res = await axios.get("https://dummyjson.com/users");
            // console.log("users",res.data.users);
            setTableData(res.data.users);
        } catch (err) {
            console.log(err)
        }
    })();
}, []);

function createKey(input) {
    return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
}

const rows = tableData.map((employeeObj) => ({
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
        <DynamicTable head={head} rows={rows} rowsPerPage={15}/>
    </div>
  )
}

export default EmployeeListing