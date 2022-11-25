import React from 'react'
import signIn from './signin.css'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


let data="";

export default function SignIn() {

  const [UseN, setUserN] = useState("");
  const [buttDis,setbuttDis] = useState(false);

  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
//Local storage of user data for transfering to attendence page
  useEffect(() => {
    localStorage.setItem('Email', JSON.stringify(Email));
  }, [Email]);

useEffect(()=>{
  if(UseN!==""){console.log(UseN);sendSubmit();}
},[UseN])

useEffect(() => {
  localStorage.setItem('UseN', JSON.stringify(UseN));
}, [UseN]);
 
  async function Register(){

    setbuttDis(true);
    const response = await fetch('http://localhost:1337/api/login',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      Email,
      password,
    }), 
  })
   data = await response.json();
console.log(data);

if(data.status==='ok'){
  setUserN([...JSON.stringify(data.Name)]);
}else{
  alert("Wrong Email/Password");}
 
 
 
 }



const sendSubmit = () => {
    navigate("/Attendence");  
};


  return (
    <div className='SignUpContainer'>
      <div className='SignBox'>
        <div className='Data'>
        <label>Email:</label>
        <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email"></input>
        </div>
        <div className='Data'>
        <label>Password:</label>
        <input value={password} onChange={(e)=>{setpassword(e.target.value)}}  type="password"></input>
        </div>
        <button  disabled={buttDis} onClick={Register} className='gragientColor2' type="submit">SignIn</button>
        {(!buttDis) &&<div className='NoAccount'>
          <a  href='/'>Don't Have an Account</a>
        </div>}
        
      </div>

      </div>
  )
}
