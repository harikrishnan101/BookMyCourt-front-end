import React, { useEffect, useState } from 'react'
import Navbarmain from '../components/Navbar'
import Cards from '../components/Cards'
import {

  MDBFooter,MDBContainer

}
  from 'mdb-react-ui-kit';
import Footer from './Footer';
import AxiosInstance from '../config/axiosinstance';


function Home() {
const[courtData,setcourtData]=useState([])

  useEffect(()=>{
getAllCourtData()
  },[])

  const getAllCourtData=()=>{
    AxiosInstance.get('users/getAllCourtData').then((res)=>{
setcourtData(res?.data?.court)
    })
  }


  return (
    // Navbar
    <><div>
      <Navbarmain />
    </div>

      {/* body */}
      <div className='container mt-4 '>
        <div className='row d-flex justify-content-center  gap-4'>

          {
            courtData?.map((element)=>  <Cards data={element} />)
          }
        
          
         
        </div >
        <Footer/>
      </div></>

      // footer
  )
}

export default Home