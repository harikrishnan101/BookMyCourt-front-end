import React, { useEffect, useState } from 'react';
import Navbarmain from '../components/Navbar';
import SingleCourtComponent from '../components/SingleCourtComponent';
import AxiosInstance from '../config/axiosinstance';
import { useParams } from 'react-router-dom';
import TimeSlot from './TimeSlot';

function UserCourtPage() {
  const { id } = useParams();
  const [courtData, setCourtData] = useState();
  const [timeSchedules, setTimeSchedules] = useState([]); // Renamed to camelCase

  const [selectDate, setSelectDate] = useState(null);

  useEffect(() => {
    AxiosInstance.get('users/getslotData', {
      params: {
        date: selectDate || new Date(),
        courtId: id,
        currentHour: new Date().getHours(),
      },
    })
      .then((res) => {
        console.log(res);
        setTimeSchedules(res.data); // Assuming 'res.data' is an array of slot objects
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, selectDate]);

  return (
    <>
      <Navbarmain />
      <SingleCourtComponent setcourtData={setCourtData} />

      <div className='d-flex flex-wrap gap-5 p-3 justify-content-center'>
        {timeSchedules.map((slot) => (
          <TimeSlot slot={slot}  /> // Don't forget the key prop
        ))}
      </div>
    </>
  );
}

export default UserCourtPage;
