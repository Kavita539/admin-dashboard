import React from 'react';
import { token } from '@atlaskit/tokens';
import PageHeader from '@atlaskit/page-header';
import { HeadingItem } from "@atlaskit/menu";
import { Radio } from '@atlaskit/radio';
import { Checkbox } from '@atlaskit/checkbox';
import { useEmployee } from '../../context/Employeecontext';
import { useFilter } from '../../context/Filtercontext';
import "./filterList.css";

const FilterList = () => {
  const{state, dispatch} = useFilter();
  const {tableData} = useEmployee();
  const bloodGroupNames = tableData.map(bloodGroupName => bloodGroupName.bloodGroup);
  const showbloodGroups =  bloodGroupNames?.filter((item,
    index) => bloodGroupNames.indexOf(item) === index);
  const gender = tableData.map(gender => gender.gender);
  const showGender =  gender?.filter((item,
    index) => gender.indexOf(item) === index);
  const universityName = tableData.map(universityName => universityName.university);
  
  return (
    <div style={{
        backgroundColor: token("elevation.surface.overlay", "#fff"),
        boxShadow: token(
          "elevation.shadow.overlay",
          "0px 4px 8px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)"
        ),
        borderRadius: 4,
        maxWidth: 320,
        marginRight: "10px",
        paddingLeft: "20px",
      }} className='filter-conatiner'>
      <PageHeader>Filter</PageHeader>
      <ul className='filter-sort-list'>
        <HeadingItem>SORT BY NAME</HeadingItem>
        <li>
          <Radio value="first name" label="First Name" name="first-name" isChecked={state.sort==="first-name" }
            onChange={()=> dispatch({ type: "SORT_BY_NAME", payload: "first-name" })}/>
        </li>
        <li>
          <Radio value="last name" label="Last Name" name="last-name" isChecked={state.sort==="last-name" }
            onChange={()=> dispatch({ type: "SORT_BY_NAME", payload: "last-name" })}/>
        </li>
      </ul>
      <ul className='filter-sort-list'>
        <HeadingItem>SORT BY AGE</HeadingItem>
        <li>
          <Radio value="age ascending" label="Age (Ascending)" name="age-ascending"
            isChecked={state.sort==="age-ascending" } onChange={()=> dispatch({ type: "SORT_BY_AGE", payload:
            "age-ascending" })}/>
        </li>
        <li>
          <Radio value="age descending" label="Age (Descending)" name="age-descending"
            isChecked={state.sort==="age.descending" } onChange={()=> dispatch({ type: "SORT_BY_AGE", payload:
            "age-descending" })}/>
        </li>
      </ul>
      <ul className='filter-employee'>
        <HeadingItem>BLOOd GROUP</HeadingItem>
        <li>
          <Checkbox value="all" label="all" name="all" testId="all" isChecked={state.bloodGroup.length===0 ||
            state.bloodGroup.length===bloodGroupNames.length} onChange={()=>
            dispatch({ type: "FILTER_BY_BLOOD_GROUP", payload: "all" })}/>
        </li>
        <li>
          {
          showbloodGroups.map(bg=>(
          <Checkbox label={bg} isChecked={state.bloodGroup.includes(bg)} onChange={()=> dispatch({ type:
            "FILTER_BY_BLOOD_GROUP", payload: bg })}/>
            ))
            }
        </li>
      </ul>

      <ul className='filter-employee'>
        <HeadingItem>Gender</HeadingItem>
        <li>
          <Checkbox value="all" label="all" name="all" testId="all" isChecked={state.gender.length===0 ||
            state.gender.length===gender.length} onChange={()=>
            dispatch({ type: "FILTER_BY_GENDER", payload: "all" })}/>
        </li>
        <li>
          {
          showGender.map(gender=>(
          <Checkbox label={gender} isChecked={state.gender.includes(gender)} onChange={()=> dispatch({ type:
            "FILTER_BY_GENDER", payload: gender })}/>
            ))
            }
        </li>
      </ul>

      <ul className='filter-employee'>
        <HeadingItem>UNIVERSITY</HeadingItem>
        <li>
          <Checkbox value="all" label="all" name="all" testId="all" isChecked={state.university.length===0 ||
            state.university.length===universityName.length} onChange={()=>
            dispatch({ type: "FILTER_BY_UNIVERSITY", payload: "all" })}/>
        </li>
        <li>
          {
          universityName.map(uni=>(
          <Checkbox label={uni} isChecked={state.university.includes(uni)} onChange={()=> dispatch({ type:
            "FILTER_BY_UNIVERSITY", payload: uni })}/>
            ))
            }
        </li>
      </ul>
    </div>
  )
}

export default FilterList