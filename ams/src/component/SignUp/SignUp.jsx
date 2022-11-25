import React from 'react'
import signup from './signup.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";



export default function SignUp() {  
  const navigate = useNavigate()
  const [Name, setName] = useState("");
  const [Last, setLast] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
 
  async function Register(){
    const response = await fetch('http://localhost:1337/api/regester',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      Name,
      Last,
      Email,
      password,
    }), 
  })
  const data = await response.json();
console.log(data);

if(data.status==='ok'){
  navigate("/login");
 
  };
}
const AlreadyHaveAccount=()=>{
  navigate("/login"); 
}


  return (
    <div className='SignUpContainer'>
      <div className='SignBox'>
        <div className='Data'>
        <label>First Name:</label>
        <input value={Name} onChange={(e)=>{setName(e.target.value)}} type="text"></input>
        </div>
        <div className='Data'>
        <label>Last Name:</label>
        <input value={Last} onChange={(e)=>{setLast(e.target.value)}} type="text"></input>
        </div>
        <div className='Data'>
        <label>Email:</label>
        <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email"></input>
        </div>
        <div className='Data'>
        <label>Password:</label>
        <input value={password} onChange={(e)=>{setpassword(e.target.value)}}  type="password"></input>
        </div>
        <button onClick={AlreadyHaveAccount} className='gragientColor2' >Account?</button>
        <button onClick={Register} className='gragientColor2' type="submit">SignUp</button>
        
      </div>

      
      
      </div>
  )
}
