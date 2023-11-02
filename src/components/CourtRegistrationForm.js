import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import AxiosInstance from '../config/axiosinstance';

function CourtRegistrationForm() {
  const [RegisterData, setRegisterData] = useState({
    name: '',
    location: '',
    cost: 0,
    about: '',
  });
  const [courtpic, setCourtpic] = useState();
  const [formErrors, setFormErrors] = useState({});

  const handleFileChange = (e) => {
    
    setCourtpic({ file: e.target.files[0] });
  };

  const handleRegister = () => {
    const errors = {};

    if (!RegisterData.name) {
      errors.name = 'Court name is required';
    }

    if (!RegisterData.location) {
      errors.location = 'Location is required';
    }

    if (RegisterData.cost <= 0) {
      errors.cost = 'Charge must be greater than 0';
    }

    if (!RegisterData.about) {
      errors.about = 'About your court is required';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      let filedata = new FormData();
      filedata.append('image', courtpic.file);

      AxiosInstance.post('/users/register-court', filedata, {
        params: RegisterData,
        Headers: {
          'content-type': 'multiple/form-data',
        },
      })
        .then((res) => {
          alert(res.data.message);
        })
        .catch((res) => {
          alert(res.data.message);
        });
    }
  };

  return (
    <MDBContainer style={{ marginLeft: '500px' }}>
      <MDBCard className='mt-2' style={{ maxWidth: '500px' }}>
        <MDBCardBody className='px-5'>
          <h4 className="text-uppercase text-center ">
            <b>Register Your Court</b>
          </h4>
          <label>Court Name</label>
          <MDBInput
            wrapperClass='mb-4 mt-2'
            placeholder='Eg: Tenz'
            size='ml'
            id='form1'
            type='text'
            value={RegisterData.name}
            onChange={(e) =>
              setRegisterData({ ...RegisterData, name: e.target.value })
            }
          />
          {formErrors.name && (
            <div className='text-danger'>{formErrors.name}</div>
          )}

          <label>Location</label>
          <MDBInput
            wrapperClass='mb-4 mt-2'
            placeholder='Eg: Trivandrum'
            size='ml'
            id='form2'
            type='text'
            value={RegisterData.location}
            onChange={(e) =>
              setRegisterData({ ...RegisterData, location: e.target.value })
            }
          />
          {formErrors.location && (
            <div className='text-danger'>{formErrors.location}</div>
          )}

          <label>Charge</label>
          <MDBInput
            wrapperClass='mb-4 mt-2'
            placeholder='Eg: 1000'
            size='ml'
            id='form3'
            type='number'
            value={RegisterData.cost}
            onChange={(e) =>
              setRegisterData({ ...RegisterData, cost: e.target.value })
            }
          />
          {formErrors.cost && (
            <div className='text-danger'>{formErrors.cost}</div>
          )}

          <label>About your court</label>
          <MDBInput
            className='mt-2'
            type="text"
            name="content"
            class="form-control"
            placeholder=''
            style={{ width: '400px', height: '100px' }}
            value={RegisterData.about}
            onChange={(e) =>
              setRegisterData({ ...RegisterData, about: e.target.value })
            }
          />
          {formErrors.about && (
            <div className='text-danger'>{formErrors.about}</div>
          )}

          <label className='mt-3'>Upload your court Name</label>
          <MDBInput wrapperClass='mt-2' placeholder='' size='ml' id='form3' type='file' onChange={handleFileChange} />

          <button className='btn btn-primary mt-5' style={{ marginLeft: '150px' }} onClick={handleRegister}>
            Register
          </button>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default CourtRegistrationForm;
