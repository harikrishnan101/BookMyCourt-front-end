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
  const [selectDate, setSelectDate] = useState(new Date().toISOString().split("T")[0]);

  const getslotData = () => {
    let currentHour = new Date().toISOString().split("T")[0] === selectDate
      ? new Date().getHours()
      : -1;

    AxiosInstance.get('users/getslotData', {
      params: { date: new Date(selectDate), courtId: id, currentHour: currentHour }
    })
      .then((res) => {
        console.log(res);
        setTimeSchedules(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getslotData();
  }, [id, selectDate]);

  return (
    <>
      <Navbarmain />
      <SingleCourtComponent setcourtData={setCourtData} />
      <div>
        <label>Select the date</label>
        <input
          type='date'
          min={new Date().toISOString().split("T")[0]}
          value={selectDate}
          className='rounded'
          onChange={(e) => setSelectDate(e.target.value)}
        />
        <button className='btn btn-primary' onClick={getslotData}>OK</button>
      </div>
      <div className='d-flex flex-wrap gap-5 p-3 justify-content-center'>
        {timeSchedules.map((slot) => (
          <TimeSlot key={slot.id} slot={slot} />
        ))}
      </div>
    </>
  );
}

export default UserCourtPage;
