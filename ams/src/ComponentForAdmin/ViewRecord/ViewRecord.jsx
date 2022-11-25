import React from 'react'
import viewRecord from './viewRecord.css'
import { useState,useEffect } from 'react';


export default function ViewRecord() {
const [UsersDetails, setUsersDetails] = useState([]);
const [totalUser, settotalUser] = useState([])
//////////////FetchBelow//////////////////
async function LoadDataToPage(){

  const response = await fetch('http://localhost:1337/api/admin/ViewRecord',{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
})



const data = await response.json();


if(data.status==='ok'){
  

setUsersDetails(data.Detail);
let arr = new Array(data.User).fill({});
settotalUser(arr);
}else{
  alert("Backend Data Error");
}
}
///////////////////////////////////

useEffect(() => {
  LoadDataToPage()
}, [])




  return (
    <div className='PageContainer'>
      {/* ////////////Write Code Below/////////// */}

      <div className='RecordBox'>
        {/* <div className='ButtonRecord'>
        <button onClick={LoadDataToPage}>Refresh</button>
        </div> */}
        <div className='HeaderBorder'>
        <div className='BoxHeader'>Name:</div>
        <div className='BoxHeader'>Last Name:</div>
        <div className='BoxHeader'>Email: </div>
        <div className='BoxHeader'></div>
        </div>
        <div className='DataLoad'>
          
          {totalUser.map((DataOfUser,i)=>{
            return(
            <div className='BoxBorder' key={UsersDetails[i].Email}>
              
                <div className='Box'>{ UsersDetails[i].Name}</div>
                <div className='Box'>{ UsersDetails[i].LName}</div>
                <div className='Box'><a>{ UsersDetails[i].Email}</a></div>
                <div className='Box'><button>Delete </button></div>
                
              </div>
           
          )}
          )}
        </div>

      </div>







      {/* ////////////Write Code Above/////////// */}
      </div>
  )
}
