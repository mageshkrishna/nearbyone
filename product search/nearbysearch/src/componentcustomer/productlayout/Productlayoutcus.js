import React from 'react'
import "./Productlayoutcus.css"
const Productlayoutcus = (props) => {
    const{productdata,location} = props;
    const result = productdata.filter((item) => item.location == location);
  return (
    <div className='outerr'>
  {result.map((e,id)=>{
      return(

  <div className='inner' key={id}>
      <h2>{e.title}</h2>
      <p>Rating:{e.description}</p>
      <p>Rating:{e.businessname}</p>
      <p>Rating:{e.location}</p>
      <p>Rating:{e.phonenumber}</p>
    
 </div>
      )
  })}
  </div>
  )
}

export default Productlayoutcus;