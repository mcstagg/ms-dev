import { useState } from 'react';
import './App.css';
import mike from './mike.png';
import concrete from './concrete.PNG';
import Banner from './Banner';
import ResumeModal from './ResumeModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Card } from 'react-bootstrap';

const App = () => {

  const [resumeModalShow, setResumeModalShow] = useState(false);

  const showResumeModal = () => {
    setResumeModalShow(true);
  }

  const onCloseClick = () => {
    setResumeModalShow(false)
  }

  return (

    <>
      <Banner showResumeModal={showResumeModal}/>

      <Row className="">
        <Col className="pl-5 pt-5 ">
          <Card className="">
            <Card.Img variant="top" src={concrete} />
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Text>
                Here are the projects I have created and worked on. 
              </Card.Text>
              <Button variant="primary">See Projects</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-5">
        <Card className="width-auto">
            <Card.Img variant="top" src={mike} />
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Here you can find out about me and what makes me tick. 
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ResumeModal 
        show={resumeModalShow} 
        onHide={
          () => setResumeModalShow(false)
        }
        showResumeModal={showResumeModal}
      />
    </>
  );
}

export default App;
