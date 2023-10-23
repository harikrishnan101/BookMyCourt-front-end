import React from 'react';
import Navbarmain from '../components/Navbar';
import CourtRegistrationForm from '../components/CourtRegistrationForm';

function CourtRegistration() {
  return (
    <div>
      <Navbarmain />
      <div className='row ' style={{width:"1000px"}}>
    <CourtRegistrationForm/>
      </div>
    </div>
  );
}

export default CourtRegistration;
