import React, {useState} from "react";
import { useEmployee } from "../../context/Employeecontext";
import { useFilter } from "../../context/Filtercontext";
import DynamicTable from "@atlaskit/dynamic-table";
import Button from '@atlaskit/button/standard-button'
import { selectFilteredEmployees, sortEmployees } from "../../utils/filterMethods";
import { head } from "../../utils/tableDataHandler";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from '@atlaskit/modal-dialog';
// import EmployeeDataModal from "../employeeDataModal/EmployeeDataModal";

const EmployeeListing = () => {
const {state} = useFilter();
const { tableData, currentItemId, setCurrentItemId }= useEmployee();
console.log("id", currentItemId);
const sortedList = sortEmployees(state.sort, tableData);
const finalFilteredList = selectFilteredEmployees(state, sortedList);
console.log("list", finalFilteredList);
const [isOpen, setIsOpen] = useState(false);

const openModal = (id) => {
  setIsOpen(true);
  setCurrentItemId(id);
};

const closeModal = () => setIsOpen(false);

const foundEmployee = tableData.find((data)=> data.id === currentItemId);
  console.log("emp", foundEmployee);

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
      {
        key: employeeObj.id,
        content: <Button onClick={()=>openModal(employeeObj.id)}>Details</Button>
      }
    ],
  }));

  return (
    <div className="employee-listing-table">
        <DynamicTable head={head} rows={rows} rowsPerPage={15} loadingSpinnerSize="large"/>
        
        <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal} >
            <ModalHeader>
              <ModalTitle>Duplicate this page</ModalTitle>
            </ModalHeader>
            <ModalBody>
              Duplicating this page will make it a child page of{' '}
              <span >{foundEmployee?.name}</span>, in the{' '}
              <span >Search & Smarts</span> space.
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={closeModal}>
                Cancel
              </Button>
              <Button appearance="primary" onClick={closeModal} autoFocus>
                Duplicate
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </div>
  )
}

export default EmployeeListing