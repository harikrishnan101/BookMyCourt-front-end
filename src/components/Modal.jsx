import React from 'react'

import Modal from 'react-modal';


function CModal({openModal,setOpenModal,children}) {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
  return (
    <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)} // Close the modal when requested
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
        hello
      </Modal>
  )
}

export default CModal