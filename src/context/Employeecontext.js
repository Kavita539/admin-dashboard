import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const employeeContext = createContext();
const useEmployee = () => useContext(employeeContext);


const EmployeeProvider = ({children}) => {
const [tableData, setTableData] = useState([]);

useEffect(() => {
    (async () => {
        try {
            const res = await axios.get("https://dummyjson.com/users");
            console.log("users",res.data.users);
            setTableData(res.data.users);
        } catch (err) {
            console.log(err)
        }
    })();
}, []);


      return(
          <employeeContext.Provider value={{tableData}}>
              {children}
          </employeeContext.Provider>
      );
    
};

export {EmployeeProvider, useEmployee};