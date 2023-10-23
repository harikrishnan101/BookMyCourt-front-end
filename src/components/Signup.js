import React, { useEffect, useState } from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBInput, MDBRow, MDBContainer } from 'mdb-react-ui-kit';
import axios from 'axios';

function Signupbox({ setboxname }) {
  const [login, setlogin] = useState({
    firstname: '',
    Lastname: '',
    email: '',
    password: '',
    Password2: '',
  });

  const [errors, setErrors] = useState({
    firstname: '',
    Lastname: '',
    email: '',
    password: '',
    Password2: '',
  });

  useEffect(() => {
    console.log(login);
  }, [login]);

  const validateForm = () => {
    let valid = true;
    const nameRegex = /^[A-Za-z\s]+$/; // Allow only alphabets and spaces for names
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const newErrors = { ...errors };

    if (!login.firstname.match(nameRegex)) {
      newErrors.firstname = 'Invalid first name';
      valid = false;
    } else {
      newErrors.firstname = '';
    }

    if (!login.lastname.match(nameRegex)) {
      newErrors.lastname = 'Invalid last name';
      valid = false;
    } else {
      newErrors.lastname = '';
    }

    if (!login.email.match(emailRegex)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (!login.password.match(passwordRegex)) {
      newErrors.password = 'Password must contain at least one digit, one lowercase and one uppercase letter, and be at least 6 characters long';
      valid = false;
    } else {
      newErrors.password = '';
    }

    if (login.Password2 !== login.password) {
      newErrors.Password2 = 'Passwords do not match';
      valid = false;
    } else {
      newErrors.Password2 = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handlesignup = () => {
    if (validateForm()) {
      axios.post('http://localhost:4000/auth/register', login).then((res) => {
        if (res.data.signup) {
          alert('Sign up successfully');
          setboxname('login');
        } else {
          alert('Sign up failed');
        }
      });
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '6rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">BookMyCourt</h2>
              <p className="text-white-50 mb-5">Sign Up It's quick and easy.</p>
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='First name'
                id='firstname'
                type='text'
                value={login.firstname}
                onChange={(e) => setlogin({ ...login, firstname: e.target.value })}
          
              />
              {errors.firstname && <span className="text-danger">{errors.firstname}</span>}
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Last name'
                id='lastname'
                type='text'
                value={login.lastname}
                onChange={(e) => setlogin({ ...login, lastname: e.target.value })}
              />
              {errors.lastname && <span className="text-danger">{errors.lastname}</span>}
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Email'
                id='email'
                type='email'
                value={login.email}
                onChange={(e) => setlogin({ ...login, email: e.target.value })}
              />
              {errors.email && <span className="text-danger">{errors.email}</span>}
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Password'
                id='Password'
                type='password'
                value={login.password}
                onChange={(e) => setlogin({ ...login, password: e.target.value })}
              />
              {errors.password && <span className="text-danger">{errors.password}</span>}
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Confirm Password'
                id='Password2'
                type='password'
                value={login.Password2}
                onChange={(e) => setlogin({ ...login, Password2: e.target.value })}
              />
              {errors.Password2 && <span className="text-danger">{errors.Password2}</span>}
              <button className='w-50 btn btn-dark' onClick={handlesignup} style={{ marginLeft: '10px' }}>Sign Up</button>
              <div>
                <p className="mb-0">Have an account? <a href="#!" className="text-white-50 fw-bold" onClick={() => setboxname('login')} style={{ color: "blue" }}>Log in</a></p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signupbox;





// import React, { useEffect, useState } from 'react';


// import {

//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBRow,
//   MDBContainer


// }
//   from 'mdb-react-ui-kit';
// import axios from 'axios';

// function Signupbox({ setboxname }) {
//   const [login, setlogin] = useState({
//     Firstname: '',
//     Lastname: '',
//     email: '',
//     password: '',
//     Password2: ''


//   })
//   useEffect(() => {
//     console.log(login);
//   }, [login])
//   const handlesignup = () => {
//     axios.post('http://localhost:4000/auth/register', login).then((res) => {
//       if (res.data.signup) {
//         alert("sign up successfully")
//         setboxname('login')
//       }
//       else {
//         alert(" sign up failed")
//       }
//     })
//   }



//   return (




//     <MDBContainer fluid>

//       <MDBRow className='d-flex justify-content-center align-items-center h-100'>
//         <MDBCol col='12'>

//           <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '6rem', maxWidth: '400px' }}>
//             <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

//               <h2 className="fw-bold mb-2 text-uppercase">BookMyCourt</h2>
//               <p className="text-white-50 mb-5">Sign Up
// It's quick and easy.</p>
//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='First name' id='firstname' type='text' value={login.firstname} onChange={(e) => setlogin({ ...login, firstname: e.target.value })} />
//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Last name' id='lastname' type='text' value={login.lastname} onChange={(e) => setlogin({ ...login, lastname: e.target.value })} />
//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email' id='email' type='email' value={login.email} onChange={(e) => setlogin({ ...login, email: e.target.value })} />
//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='Password' type='password' value={login.password} onChange={(e) => setlogin({ ...login, password: e.target.value })} />
//               <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label=' confirm Password' id='Password2' type='password' value={login.Password2} onChange={(e) => setlogin({ ...login, Password2: e.target.value })} />

//               <button className=' w-50 btn btn-dark   ' onClick={handlesignup} style={{ marginLeft: '10px' }}> sign up</button>



//               <div>
//                 <p className="mb-0">Have an account? <a href="#!" class="text-white-50 fw-bold" onClick={() => setboxname('login')} style={{ color: "blue" }}> Log in</a></p>

//               </div>
//             </MDBCardBody>
//           </MDBCard>

//         </MDBCol>
//       </MDBRow>

//     </MDBContainer>

//   );
// }

// export default Signupbox;



