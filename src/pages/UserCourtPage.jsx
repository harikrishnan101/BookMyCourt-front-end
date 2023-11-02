import React, { useEffect, useState } from 'react'

import Navbarmain from '../components/Navbar'
import SingleCourtComponent from '../components/SingleCourtComponent'
import CourtTimeTable from '../components/CourtTimeTable'
import AxiosInstance from '../config/axiosinstance'
import { useParams } from 'react-router-dom'

function UserCourtPage() {

const {id}=useParams()

    const [courtData,setcourtData]=useState()
    const [selectDate,setselectDate]=useState(null)



useEffect(()=>{
    
AxiosInstance.get('users/getslotData',{params:{date:selectDate ?? new Date(),courtId:id}})
},[])


    return (
      <>
      <Navbarmain/>
      <SingleCourtComponent setcourtData={setcourtData}/>
     
      
      
      </>
    )
}

export default UserCourtPage