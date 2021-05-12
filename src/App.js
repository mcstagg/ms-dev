import './App.css';
import mike from './mike.png';
import concrete from './concrete.PNG';
import Banner from './Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Card } from 'react-bootstrap';

const App = () => {

  return (

    <>
      <Banner />

      <Row className="">
        <Col className="pl-5 pt-5 ">
          <Card className="">
            <Card.Img variant="top" src={concrete} />
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-5">
        <Card className="width-auto">
            <Card.Img variant="top" src={mike} />
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;
