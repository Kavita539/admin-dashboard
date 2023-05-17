import React, {useState} from "react";
import { useEmployee } from "../../context/Employeecontext";
import { useFilter } from "../../context/Filtercontext";
import DynamicTable from "@atlaskit/dynamic-table";
import Button from '@atlaskit/button/standard-button'
import { selectFilteredEmployees, sortEmployees, handleSearch } from "../../utils/filterMethods";
import { head } from "../../utils/tableDataHandler";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from '@atlaskit/modal-dialog';
import { Link } from "react-router-dom";
import { useShortlist } from "../../context/ShortlistContext";
import "./employeeListing.css";

const EmployeeListing = () => {
const {state} = useFilter();
const { tableData, currentItemId, setCurrentItemId }= useEmployee();
const {setShortlisted, shortlisted} = useShortlist();
// console.log("id", currentItemId);
const sortedList = sortEmployees(state.sort, tableData);
const filteredList = selectFilteredEmployees(state, sortedList);
const finalList = handleSearch(filteredList, state.appliedSearchTerm);
// console.log("list", finalFilteredList);
const [isOpen, setIsOpen] = useState(false);

const openModal = (id) => {
  setIsOpen(true);
  setCurrentItemId(id);
};

const closeModal = () => setIsOpen(false);

const foundEmployee = tableData.find((data)=> data.id === currentItemId);
 
const foundEmployee2 = shortlisted.find((data)=> data.id === currentItemId);


const shortListHandler = () => {
  console.log("emp", foundEmployee);
  setShortlisted((prev)=>{
    return [...prev, foundEmployee]
})
}

const unShortListHandler = () => {
  const filteredCandidate = shortlisted.filter((data)=> data.id === currentItemId );
  console.log("cand", filteredCandidate);
  setShortlisted(filteredCandidate)
}

function createKey(input) {
    return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
}

const rows = finalList.map((employeeObj) => ({
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
    <div className="employee-listing">
       <div className="employee-listing-table">
       <DynamicTable head={head} rows={rows} rowsPerPage={15} loadingSpinnerSize="large"/>
       </div>

        
        <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal}>
            <ModalHeader>
              <ModalTitle>Employee Data</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <div className="modal-body">
              <div className="employee-basic-details">
                <div className="employee-name-img">
                  <div className="employee-img-container">
                    <img src={foundEmployee?.image} alt={foundEmployee?.firstName} className="employee-img" />
                  </div>
                  <div className="employee-name">
                    <h5>Employee Name</h5>
                    <p>
                      <span>{foundEmployee?.firstName}</span>
                      <span>{foundEmployee?.lastName}</span></p>
                  </div>
                </div>
                <div className="employee-gender">
                  <h5>Gender</h5>
                  <p>{foundEmployee?.gender}</p>
                </div>
                <div className="employee-age">
                  <h5>Age</h5>
                  <p>{foundEmployee?.age}</p>
                </div>
                <div className="employee-birth">
                  <h5>Birth date</h5>
                  <p>{foundEmployee?.birthDate}</p>
                </div>
              </div>
              <div className="employee-secondary-details">
              <div className="employee-email">
                  <h5>Email</h5>
                  <p>{foundEmployee?.email}</p>
                </div>
                <div className="employee-phone">
                  <h5>Phone</h5>
                  <p>{foundEmployee?.phone}</p>
                </div>
                <div className="employee-blood">
                  <h5>Blood Group</h5>
                  <p>{foundEmployee?.bloodGroup}</p>
                </div>
                <div className="employee-uni">
                  <h5>University</h5>
                  <p>{foundEmployee?.university}</p>
                </div>
              </div>
              <div className="shortlist-cta">
                {foundEmployee2 ?
                (
                <Button appearance="primary" onClick={unShortListHandler} isDisabled={true}>UnshortList</Button>
                ) : (<Link to="/shortlist">
                <Button appearance="primary" onClick={shortListHandler}>shortList</Button>
                </Link>)}
              </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button appearance="primary" onClick={closeModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </div>
  )
}

export default EmployeeListing