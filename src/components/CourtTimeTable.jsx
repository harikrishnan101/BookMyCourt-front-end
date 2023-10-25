import Table from 'react-bootstrap/Table';
import Courtmodal from "../components/common/Modal";
import { useState } from 'react';

import './style/CourtTimeTable.css';
import { TIMINGS } from '../constants/baseUrl';
import AxiosInstance from '../config/axiosinstance';

function CourtTimeTable({ data }) {
  const [openModal, setOpenModal] = useState();

  const[filterTimings,setfilterTimings]=useState(TIMINGS)

  const [showDropDown, setshowDropDown] = useState(false);
  // const [minData,setminData]=useState(new Date())

  const[selectedTimings,setselectedTimings]=useState([])

  const [courtTiming,setcourtTiming]=useState({
    startDate:'',
    endDate:'',
    cost:''
  })

  const addNewTime=(element,index)=>{

  const check =  selectedTimings.filter((timeObj)=> 
      timeObj.id===element.id
    ) 


if(check.length > 0){
  return
}else{
  setselectedTimings([...selectedTimings,element])
}

const filteredData =filterTimings.filter((timeObj)=>timeObj.id!==element.id)
setfilterTimings(filteredData)

  }
  // const setStartingDate=(e)=>{

  // }

  const addCourtTiming = () => {
    AxiosInstance({
      method: 'post',
      url: '/users/addCourtTimings',
      data: {
        date: courtTiming,
        schedules: selectedTimings,
      }
    }).then((res) => {
      // debugger;
      // Handle the response here
    });
    
    console.log(courtTiming, selectedTimings);
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
        <div className='d-flex flex-column add-court-timing-modal'>
          <div >{data?.name} </div>
          <div>{data?.location} </div>
          <div className='mt-4'>
            <label htmlFor=''>Starting date</label>
            <input className='' type='date' onChange={(e)=>setcourtTiming({...courtTiming,startDate:new Date(e.target.value)})} />
            <label htmlFor=''>ending date</label>
            <input className='' type='date' onChange={(e)=>setcourtTiming({...courtTiming,endDate:new Date(e.target.value)})} />
            <label htmlFor=''> cost</label>
            <input className='' type='number' onChange={(e)=>setcourtTiming({...courtTiming,cost:parseInt(e.target.value)})} />
          </div>
          <div className='cus-dropdown mt-4' onClick={() => setshowDropDown(true)}>
            Select Timing
            {showDropDown && (
              <div className='cus-options' onMouseLeave={() => setshowDropDown(false)}>
                <ul>
                  {(filterTimings).map((element,index) => 
                    <li onClick={()=>addNewTime(element,index)} key={element.id}>{element.name}</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
        {
          selectedTimings.map((element)=>  
          
          <span className='border border-1 mx-2' key={element.id}>{element.name} </span>
          )
        }

        <div>
        <button type="button" class="btn btn-primary" onClick={addCourtTiming()}>Primary</button>
        </div>
      </Courtmodal>
    </div>
  );
}

export default CourtTimeTable;
