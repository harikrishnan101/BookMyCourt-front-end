import React, { Component, useState } from 'react';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  
}
from 'mdb-react-ui-kit';
import Loginbox from '../components/Login'
import Signupbox from '../components/Signup'


function Login({}) {
  const [boxname,setboxname]=useState("login")
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{minHeight:'100vh'}}>

      <MDBRow>

        <MDBCol md='7' className='text-center text-md-start d-flex flex-column justify-content-center'>
        
         
            
          

        </MDBCol>

        {/* {boxname?<Loginbox setboxname={setboxname}/>:<Signupbox/>} */}

        {boxname==="login" && <Loginbox setboxname={setboxname}/>}
        {boxname==="signup" && <Signupbox setboxname={setboxname}/>}
        <MDBCol md='1'></MDBCol> 

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;