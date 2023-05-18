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
        content: <Button appearance="primary" onClick={()=>openModal(employeeObj.id)}>Details</Button>
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
                        <span className="employee-span">{foundEmployee?.firstName}</span>
                        <span>{foundEmployee?.lastName}</span></p>
                    </div>
                  </div>
                  <div className="employee-maiden-name">
                    <h5>Maiden Name</h5>
                    <p>{foundEmployee?.maidenName}</p>
                  </div>
                  <div className="employee-user-name">
                    <h5>User Name</h5>
                    <p>{foundEmployee?.username}</p>
                  </div>
                  <div className="employee-gender">
                    <h5>Gender</h5>
                    <p>{foundEmployee?.gender}</p>
                  </div>
                </div>
                <div className="employee-generic-details">
                  <div className="employee-height">
                    <h5>Height</h5>
                    <p>{foundEmployee?.height}</p>
                  </div>
                  <div className="employee-weight">
                    <h5>Weight</h5>
                    <p>{foundEmployee?.weight}</p>
                  </div>
                  <div className="employee-eye-color">
                    <h5>Eye color</h5>
                    <p>{foundEmployee?.eyeColor}</p>
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
                </div>
                <div className="employee-address-details">
                  <div className="employee-uni">
                    <h5>University</h5>
                    <p>{foundEmployee?.university}</p>
                  </div>
                  <div className="employee-address">
                    <h5>Address</h5>
                    <p>
                      <span className="employee-span">{foundEmployee?.address.address}</span>
                      <span className="employee-span">{foundEmployee?.address.city}</span>
                      <span className="employee-span">{foundEmployee?.address.state}</span>
                    </p>
                  </div>
                </div>
                <div className="employee-office-details">
                 <div className="employee-office-name">
                    <h5>Company</h5>
                    <p>
                      {foundEmployee?.company.name}
                    </p>
                  </div>
                  <div className="employee-dept">
                    <h5>Department </h5>
                    <p>
                      {foundEmployee?.company.department}
                    </p>
                  </div>
                  <div className="employee-designation">
                    <h5>Designation</h5>
                    <p>
                      {foundEmployee?.company.title}
                    </p>
                  </div>
                </div>
                <div className="employee-office-address">
                <div className="employee-office">
                    <h5>company Address</h5>
                    <p>
                      <span className="employee-span">{foundEmployee?.company.address.address}</span>
                      <span className="employee-span">{foundEmployee?.company.address.city}</span>
                      <span className="employee-span">{foundEmployee?.company.postalCode}</span>
                      <span className="employee-span">{foundEmployee?.company.state}</span>
                    </p>
                </div>
                <div className="employee-domain-name">
                    <h5>Employee Domain</h5>
                    <p>
                      {foundEmployee?.domain}
                    </p>
                  </div>
                </div>
                <div className="employee-bank-details">
                <div className="employee-cardnumber">
                    <h5>Card Number</h5>
                    <p>
                      {foundEmployee?.bank.cardNumber}
                    </p>
                  </div>
                  <div className="employee-cardtype">
                    <h5>Card type</h5>
                    <p>
                      {foundEmployee?.bank.cardType}
                    </p>
                  </div>
                  <div className="employee-currency">
                    <h5>Currency</h5>
                    <p>
                      {foundEmployee?.bank.currency}
                    </p>
                  </div>
                </div>
                <div className="shortlist-cta">
                  {foundEmployee2 ?
                  (
                  <Button appearance="primary" onClick={unShortListHandler} isDisabled={true}>UnshortList</Button>
                  ) : (
                  <Link to="/shortlist">
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