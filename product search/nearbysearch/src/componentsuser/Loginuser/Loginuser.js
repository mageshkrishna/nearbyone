import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import"./Loginuser.css"
import {  toast } from 'react-toastify';


const Loginuser = () => {

   const[name,setName]= useState('')
   const[businessname,setBusinessName]= useState('')
   const[location,setlocation]= useState('')
   const[phonenumber,setPhonenumber]= useState(Number)
   const[email,setemail]= useState('')
   const[password,setPassword]= useState('')

   const navigate = useNavigate();

const handlelogin = async(e)=>{
  e.preventDefault();
 
  if(!email) {toast.warn("please enter email"); return;}
  if(!password) {toast.warn("please enter password"); return;}
        const formdatalogin ={email,password};
        await fetch('http://localhost:5000/user/login',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(formdatalogin)
        }).then((data)=>data.json()).then((datas)=>{
          const{status,data}= datas;
          if(status){
            console.log(status)
            toast.success("successfully Signed in")
            navigate('/navbaruser');
            localStorage.setItem('userlogin',JSON.stringify(data));
          }
          else{
            console.log(status)
            toast.warn("Invalid login data");
          }
        })
}
const handleregister = async(e)=>{
  e.preventDefault();
  if(!name) {toast.warn("please enter name"); return;}
  if(!businessname) {toast.warn("please enter Businessname"); return;}
  if(!location) {toast.warn("please enter Location"); return;}
  if(!phonenumber) {toast.warn("please enter Phonenumber"); return;}
  if(!email) {toast.warn("please enter email"); return;}
  if(!password) {toast.warn("please enter password"); return;}
       const formdata ={
            name,businessname,location,phonenumber,email,password
       };
       console.log(formdata)
       await fetch('http://localhost:5000/user/register',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formdata)
    }).then((data)=> data.json())
    .then((data) => {
      const {status} =data;
      if(status){
          toast.success("Account created successfully");
      }
      else{
        toast.warn("email is already used .Try again");
      }
    })
    .catch((err) => console.log(err))
}


   const [control,setcontrol]= useState(0)
const handlelog = ()=>{
        setcontrol(0);
}
const handlereg =()=>{
    setcontrol(1);
}
  return (


    <>
    <div className="f1">
     <div className="f1f1">
      <div className="f1f1nav">
      <button className="f1f1b" onClick={handlelog}>Login</button>
      <button className="f1f1b" onClick={handlereg}>Register</button>
      </div>
      <div className="f1f1fo">
      {control===0?
    <form>
 
    <input type="email"  id="exampleInputEmail1" placeholder='eg.xyz.gmail.com'   value ={email} onChange={(e)=>setemail(e.target.value)} />

    <input type="password"  id="exampleInputEmail1" placeholder='Password' value ={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={handlelogin} className='fb'>Login</button>
    </form>:<form >

    <input type="text"  id="exampleInputEmail1" placeholder='Name'  value={name} onChange={(e)=>setName(e.target.value)}/>

    <input type="text"  id="exampleInputEmail1" placeholder='Business name'value ={businessname} onChange={(e)=>setBusinessName(e.target.value)}/>

    <input type="text"  id="exampleInputEmail1"  placeholder='Location' value ={location} onChange={(e)=>setlocation(e.target.value)}/>
  
    <input type="tel"  id="exampleInputEmail1" placeholder='Phonenumber' value ={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}/>

    <input type="email"  id="exampleInputEmail1" placeholder='eg.xyz.gmail.com'  value ={email} onChange={(e)=>setemail(e.target.value)}/>
 
    <input type="password"  id="exampleInputEmail1" placeholder='password'value ={password} onChange={(e)=>setPassword(e.target.value)}/>
     <button className='fb' onClick={handleregister}>Register</button>
    </form>}
      </div>
      <div className="f1f1home"><Link className="f1f1bh"to = "/">Back to Home</Link></div>
      
      </div>
      <div className="f1f2">
   
      </div>

    </div>

    </>
  )
}

export default Loginuser;