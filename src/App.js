import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import ResumeModal from './components/ResumeModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Card } from 'react-bootstrap';
import AboutMeModal from './AboutMeModal';

const App = () => {

  const [resumeModalShow, setResumeModalShow] = useState(false);
  const [aboutMeModalShow, setAboutMeModalShow] = useState(false);

  const showResumeModal = () => {
    setResumeModalShow(true);
  }

  const showAboutMeModal = () => {
    setAboutMeModalShow(true);
  }

  return (

    <>
      <Banner showResumeModal={showResumeModal}/>

      <Row className="p-4">
        <Col className="pr-3">
          <Card className="tiles float-right">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/concrete.PNG`} />
            <Card.Body className="mx-auto">
              <Card.Title>Projects</Card.Title>
              <Card.Text>
                Here are the projects I have created and worked on. 
              </Card.Text>
              <Button
                className="pr-3"
                variant="primary" 
                onClick={
                  ()=> window.open(
                    "https://mcstagg.github.io/concrete-volume-calculator", 
                    "_blank"
                  )
                }
              >
                Concrete Volume Calculator
              </Button>
              <Button
                className="mt-1" 
                variant="primary" 
                onClick={
                  ()=> window.open(
                    "https://mcstagg.github.io/tca-jenga-app", 
                    "_blank"
                  )
                }
              >
                Jenga Table Top Companion
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="">
        <Card className="tiles">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/mike.png`} />
            <Card.Body className="pb-5">
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Here you can find out about me and what makes me tick. 
              </Card.Text>
              <Button 
                className="mb-2"
                variant="primary"
                onClick={showAboutMeModal}
              >
                Learn More
              </Button>
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

      <AboutMeModal
        show={aboutMeModalShow} 
        onHide={
          () => setAboutMeModalShow(false)
        }
        showResumeModal={showAboutMeModal}
      />
    </>
  );
}

export default App;
