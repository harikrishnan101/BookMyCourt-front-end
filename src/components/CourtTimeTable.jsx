import Table from 'react-bootstrap/Table';
import Courtmodal from "../components/common/Modal";
import { useEffect, useState } from 'react';

import './style/CourtTimeTable.css';
import { TIMINGS } from '../constants/baseUrl';
import AxiosInstance from '../config/axiosinstance';
import { MDBInput } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';

function CourtTimeTable({ data }) {
  const [openModal, setOpenModal] = useState();

  const { id } = useParams()

  const [filterTimings, setfilterTimings] = useState(TIMINGS)

  const [showDropDown, setshowDropDown] = useState(false);
  const [minDate,setminDate]=useState(new Date())

const [minEndDate,setminEndDate]=useState()


  const [selectedTimings, setselectedTimings] = useState([])

  const [courtTiming, setcourtTiming] = useState({
    startDate: null,
    endDate: "",
    cost: ""
  })

  useEffect(() => {
    AxiosInstance.get('/users/getLatestUpdateDate', {params:{courtId:id}}).then((res) => {
      
      let latestDate=new Date(res.data.minDate)
      latestDate.setDate(latestDate.getDate()+1)
      console.log(latestDate.toISOString().split('T')[0],"*************");
      setminDate(latestDate.toISOString().split('T')[0])
 

    })
  },[])


  useEffect(() => {
    if (courtTiming.startDate) {
      
      let newMin = new Date(courtTiming.startDate).toISOString().split('T')[0];
      setminDate(newMin);
    } else {
      setminEndDate(minDate);
    }
  }, [courtTiming.startDate, minDate]);
  

  const addNewTime = (element, index) => {

    const check = selectedTimings.filter((timeObj) =>
      timeObj.id === element.id
    )


    if (check.length > 0) {
      return
    } else {
      setselectedTimings([...selectedTimings, element])
    }

    const filteredData = filterTimings.filter((timeObj) => timeObj.id !== element.id)
    setfilterTimings(filteredData)

  }


  const addCourtTiming = () => {
    setOpenModal(false)
    try {
      AxiosInstance({
        method: 'post',
        url: '/vendor/addCourtTimings',
        data: {
          date: courtTiming,
          schedules: selectedTimings,
          cost: courtTiming.cost,
          courtId: id
        }
      }).then((res) => {
        alert("slots add successfully")
        setOpenModal(false)
      })
    } catch (error) {
      setOpenModal(false)
      alert("slots add failed")

    }

    console.log(courtTiming,selectedTimings);

  };


  return (
    <div>
      <div className='mt-5 d-flex justify-content-between'>
        <div className='ms-3'>
          <input type='text' />
          <input type='text' />
          <button className="btn btn-primary">Fetch Data</button>
        </div>
        <button className='me-3 btn btn-primary border rounded-3' onClick={() => setOpenModal(true)}>
          Create Bookings
        </button>
      </div>
      <Table responsive="md" className='mt-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
      <Courtmodal openModal={openModal} setOpenModal={setOpenModal}>
        <div className='d-flex flex-column add-court-timing-modal mt-5   text-center'>
          <h4><div >{data?.name} </div>
            <div>{data?.location} </div></h4>
          <div className='mt-4 '>
            <label htmlFor='' className=' me-5' >Starting Date</label>
            <MDBInput wrapperClass='mb-1' type='date' min={minDate} onChange={(e) => setcourtTiming({ ...courtTiming, startDate: new Date(e.target.value) })} />
            <label htmlFor='' className=' me-5'>Ending Date</label>
            <MDBInput wrapperClass='mb-4 ' type='date' size='' min={minEndDate} onChange={(e) => setcourtTiming({ ...courtTiming, endDate: new Date(e.target.value) })} />
            <label htmlFor='' className='me-5'> Cost</label>
            <MDBInput wrapperClass='mb-4' type='number' onChange={(e) => setcourtTiming({ ...courtTiming, cost: parseInt(e.target.value) })} />
          </div>
          <div className=' mt-5 ' onClick={() => setshowDropDown(true)}>
            <label htmlFor='' className='me-5'>  Select Timing </label>
            {showDropDown && (
              <div className='cus-options' onMouseLeave={() => setshowDropDown(false)}>
                <ul>
                  {(filterTimings).map((element, index) =>
                    <li onClick={() => addNewTime(element, index)} key={element.id}>{element.name}</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
        {
          selectedTimings.map((element) =>

            <span className='border border-1 mx-2' key={element.id}>{element.name} </span>
          )
        }

        <div className="text-center">
          <button type="button" className="btn btn-primary mt-2" onClick={addCourtTiming}>
            Primary
          </button>
        </div>

      </Courtmodal>
    </div>
  );
}

export default CourtTimeTable;
