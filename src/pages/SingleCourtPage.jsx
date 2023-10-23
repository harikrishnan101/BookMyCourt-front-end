// import React from 'react'
import Navbarmain from '../components/Navbar'
// import MyCourtComponents from '../components/MyCourtComponents'
import SingleCourtComponent from '../components/SingleCourtComponent'
import CourtTimeTable from '../components/CourtTimeTable'
import React, { useState } from 'react'

function SingleCourtPage() {

  const [courtData,setcourtData]=useState()
  return (
    <>
    <Navbarmain/>
    <SingleCourtComponent setcourtData={setcourtData}/>
    <CourtTimeTable data={courtData}/>
    
    
    </>
  )
}

export default SingleCourtPage