import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbcJjtmgPbdDQxpAJAWMOk_SsQrLGGhnQmgUHZI81zQ&s" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;