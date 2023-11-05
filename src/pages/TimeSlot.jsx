
import React, { useState } from 'react'
import Modal from 'react-modal';
import Courtmodal from '../components/common/Modal';


function TimeSlot({slot}) {

    const[openTimeSlot,setopenTimeSlot]=useState(false)
    const openModalfn=()=>{
      setopenTimeSlot(true) 
    }
  return (

    <>
    <span className='bg-success py-3 px-3 mt-2'   onClick={() => openModalfn()}     >{slot?.slot?.name}</span>
    <Courtmodal openModal={openTimeSlot} setOpenModal={setopenTimeSlot}>
    <div className="text-center">
          <button type="button" className="btn btn-primary mt-5 ">
           hi hello
          </button>
        </div>




    </Courtmodal>
    </>
  )
}

export default TimeSlot