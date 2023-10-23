import React from 'react'
import Navbarmain from '../components/Navbar'
import Cards from '../components/Cards'
import {

  MDBFooter,MDBContainer

}
  from 'mdb-react-ui-kit';
import Footer from './Footer';


function Home() {
  return (
    // Navbar
    <><div>
      <Navbarmain />
    </div>

      {/* body */}
      <div className='container mt-4 '>
        <div className='row d-flex justify-content-center  gap-4'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
         
        </div >
        <Footer/>
      </div></>

      // footer
  )
}

export default Home