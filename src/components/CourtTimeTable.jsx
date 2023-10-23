import Table from 'react-bootstrap/Table';
import Courtmodal from "../components/common/Modal";
import { useState } from 'react';

function CourtTimeTable({data}) {
  const [openModal, setOpenModal] = useState();

  return (
    <div>
      <div className='mt-5 d-flex justify-content-between'>
        <div className='ms-3'>
          <input type='text' />
          <input type='text' />
          <button className="btn btn-dark">fetch data</button>
        </div>
        <button className='me-3 btn btn-dark border rounded-3' onClick={() => setOpenModal(true)}>
          create bookings
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
        <div>
          <div>{data?.name} name</div>
          <div>{data?.location} location</div>
        </div>
      </Courtmodal>
    </div>
  );
}

export default CourtTimeTable;
