

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AxiosInstance from '../config/axiosinstance';
import { BASEURL } from '../constants/baseUrl';
// import { Card } from 'react-bootstrap';
import './style/SingleCourt.css'
// import { MDBCard, MDBCardImage, MDBCardOverlay, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';

function SingleCourtComponent({ setcourtData }) {
  const [singleCourt, setSingleCourt] = useState({});
  const { id } = useParams();

  useEffect(() => {
    AxiosInstance.get('/users/getSingleCourtData', { params: { courtId: id } }).then((res) => {
      setSingleCourt(res.data.data);
      setcourtData(res.data.data)
    })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>



      <div className='SingleCourt'>
        <img className='SingleCourtimage' src={`${BASEURL}/venderCourts/${singleCourt.image}`} alt='' />
        <h3 className='court-name'>{singleCourt?.name}</h3>


      </div>
    </>
  );
}

export default SingleCourtComponent;
