import React from 'react';
import Textfield from "@atlaskit/textfield";
import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo';
import {
  ProductHome,
} from '@atlaskit/atlassian-navigation';
import { useFilter } from '../../context/Filtercontext';
import Button from '@atlaskit/button';
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const {
    state: { appliedSearchTerm },
    dispatch: filterDispatch,
  } = useFilter();
  
  
  const handleSearchInput = (e) => {
    filterDispatch({ type: "APPLY_SEARCH_TERM", payload: e.target.value });
  }
  return (
    <div className="navbar">
     <Link to="/"> 
    <ProductHome icon={AtlassianIcon} logo={AtlassianLogo}/>
    </Link>
    <Textfield
      name="basic"
      aria-label="default text field"
      placeholder="Search for candidate"
      onChange={(e) => 
        handleSearchInput(e)
      }
      value={appliedSearchTerm}
      className="text-field"
    />
    <div className='nav-list'><Link to="/shortlist"><Button appearance='link'>Shortlisted Candidates</Button></Link></div>
    </div>
  )
};

export default Navbar