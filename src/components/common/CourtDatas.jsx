// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';
// import { BASEURL } from '../../constants/baseUrl';

// function CourtData({ data }) {
//   const navigate = useNavigate();

//   const openthisCard = (courtId = 1) => {
//     navigate(`/openCourtEdit/${data._id}`);
//   };

//   return (
//     <Card style={{ width: '30rem', height: 'auto' }} onClick={()=>openthisCard()} >
//       <Card.Img variant="top" src={`${BASEURL}/venderCourts/${data.image}`} alt="Card image cap" />
//       <Card.Body>
//         <Card.Title>{data.name}</Card.Title>
//         <Card.Text>{data.about}</Card.Text>
//         <Card.Text>{data.location}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CourtData;


import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { BASEURL } from '../../constants/baseUrl';
// import { CardGroup } from 'react-bootstrap';
import {   } from 'mdb-react-ui-kit';

function CourtData({data}) {
  const navigate = useNavigate();

  const openthisCard = (courtId = 1) => {
    navigate(`/openCourtEdit/${data?._id}`);
  };
  return (
    // <CardGroup style={{width:"48rem"}} >
      
    //   <MDBCard>
    //   <MDBCardImage src={`${BASEURL}/venderCourts/${data?.image}`} onClick={()=>openthisCard()} position='top' />
    //   <MDBCardBody>
    //     <MDBCardText>
    //     <h6>Court :{data?.name} </h6>
    //     </MDBCardText>
    //     <MDBCardText>
    //   <h6> Location: {data?.location}</h6>
    //     </MDBCardText>
    //   </MDBCardBody>
    // </MDBCard>
       
      
     
    // </CardGroup>


<Card style={{ width: '20rem' }}>
      <Card.Img  src={`${BASEURL}/venderCourts/${data?.image}`} onClick={()=>openthisCard()} />
      <Card.Body>
        <Card.Title>{data?.name}</Card.Title>
        <Card.Text>
        {data?.location}
        
        </Card.Text>
        <Button variant="primary">Go </Button>
      </Card.Body>
    </Card>
  );
}

export default CourtData;