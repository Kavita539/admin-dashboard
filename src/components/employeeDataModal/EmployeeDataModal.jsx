import React, {useCallback} from 'react';
import Modal, {
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    ModalTransition,
  } from '@atlaskit/modal-dialog';
import  Button  from '@atlaskit/button';
import { useEmployee } from '../../context/Employeecontext';

const EmployeeDataModal = () => {
  const {tableData, currentItemId, isOpen, setIsOpen} = useEmployee();
  const foundEmployee = tableData.find((data)=> data.id === currentItemId);
  const closeModal = () => setIsOpen(false);
  
  return (
<ModalTransition>
    {isOpen && (
    <Modal onClose={closeModal}>
        <ModalHeader>
            <ModalTitle>Duplicate this page</ModalTitle>
        </ModalHeader>
        <ModalBody>
            Duplicating this page will make it a child page of{' '}
            <span>Search - user exploration</span>, in the{' '}
            <span>Search & Smarts</span> space.
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
  )
}

export default EmployeeDataModal