import React, { useEffect ,useState } from 'react'
import "./CustomerdashBoard.css"
import { FaPaperPlane} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Productlayoutcus from '../productlayout/Productlayoutcus';

const CustomerdashBoard = () => {

 
  const [userDetails,setuserDetails] = useState(null);
  const navigate = useNavigate();
  const [search,setsearch] = useState('');
  const [title,settitle] = useState('');
  const [location,setlocation] = useState('');
  const [productdata,setproductdata] = useState([]);

  function handlesearch(e){
    e.preventDefault();
   
    const keyvalue = search;
    settitle(keyvalue);
  }

  useEffect(()=>{
    searchdatafetchcus();
    console.log("working");
  },[title]);

  const searchdatafetchcus = async ()=>{
    try{
    const response = await  axios.get(`http://localhost:5000/product/getcustomerproduct?title=${title}`);
    console.log(response.data);
    setproductdata(response.data);
    }
    catch(error){
      console.log(error)
    }
  }
  
  useEffect(()=>{
    try{
    const userdata = JSON.parse(localStorage.getItem('customerLogin'));
    
    setuserDetails(userdata);
    console.log(userDetails);
  }
    catch(err){
      console.log(err);
    }
  },[]);
 
  function handleLogout(e){
    e.preventDefault();
    localStorage.removeItem('customerLogin');
    navigate('/');
  }

  return (
          <>{
            userDetails?
              <div className='cdf1'>
               <div className='cdf1f1'>
                    <h1>Name : {userDetails.name} </h1>
                    <button onClick={handleLogout} >Logout</button>
                     <h1 className='cdf1f1h1'>Locate Products in an Instant on Product Locator!</h1>
                     
                      <div className='cdf1f1f1'>
                          <input className='cdf1f1i1' value={location} onChange={(e)=>setlocation(e.target.value)} type="text" placeholder="Vallioor"/>
                          <div className='cdf1f1f2'>
                          <input className='cdf1f1i2' value = {search} onChange={(e)=>setsearch(e.target.value)} type='text'  placeholder="Kite Paper"/>
                          <button className='cdf1f1f1b' onClick={handlesearch}><FaPaperPlane/></button>
                          </div>
                      </div>

               </div>
               <div>  <Productlayoutcus productdata={productdata} location={location}/></div>
             
          </div>:
          <>404 Error page Not Found</>}
          </>
  )
}

export default CustomerdashBoard