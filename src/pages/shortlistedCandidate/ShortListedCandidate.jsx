import React from 'react';
import { useShortlist } from '../../context/ShortlistContext';

const ShortListedCandidate = () => {
    const {shortlisted} = useShortlist();
  return (
    <div>
      {
        shortlisted.map((data)=>(
            <p>{data.firstName}</p>
        ))
      }
    </div>
  )
}

export default ShortListedCandidate