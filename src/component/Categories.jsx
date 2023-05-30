import React from 'react';
import {
   MDBBtn,
  } from "mdb-react-ui-kit";
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="p-5 justify-center" style={{marginLeft: '15%'}}>
      {categories.map((category, index) => {
        return (
          
          <MDBBtn
            color="info" block size="lg" style={{width: '150px', marginRight: '5px'}} 
            type="button"
            className="filter-btn bg-info  "
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </MDBBtn>
       
        
        );
      })}
    </div>
  );
};

export default Categories;
