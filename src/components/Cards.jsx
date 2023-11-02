import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BASEURL } from '../constants/baseUrl';
import { Navigate, useNavigate } from 'react-router-dom';

function Cards({data}) {

  const navigate=useNavigate()
  return (
    <Card style={{ width: '20rem' }} onClick={() => navigate(`/courtBooking/${data._id}`)}>

      <Card.Img variant="top" src={`${BASEURL}/venderCourts/${data.image}`} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
         {data.location}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;