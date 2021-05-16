import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import ResumeModal from './components/ResumeModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Card, CardDeck } from 'react-bootstrap';
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

    <div className="lock-min pb-3">
      <Banner showResumeModal={showResumeModal}/>

      <Row className="">
        <Col className="ml-3 mr-3">
        <CardDeck className="justify-content-center">
          <Card className="tiles mt-3">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/concrete.PNG`} />
            <Card.Body className="pt-0">
              <Card.Title>Concrete Volume Calculator</Card.Title>
              <Card.Text>
                This app is a construction materials calculator that processes
                dimesnions and calculates and displays the total cubic yardage 
                for the pour. The customer is then able to place the order.
              </Card.Text>
              <Button
                className="mt-2"
                variant="primary" 
                onClick={
                  ()=> window.open(
                    "https://mcstagg.github.io/concrete-volume-calculator", 
                    "_blank"
                  )
                }
              >
                View Concrete Volume Calculator
              </Button>
            </Card.Body>
          </Card>
          <Card className="tiles mt-3">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/jenga.PNG`} />
            <Card.Body className="pt-2">
              <Card.Title>Jenga Table Top Compainion App</Card.Title>
              <Card.Text>
                This app is a companion for the board game Jenga. The player
                is able to add and select player names. Then the game begins 
                and players are able to keep track of moves, time, and other 
                stats. When the game is over post game stats are displayed and 
                the leaderboard is calculated. 
              </Card.Text>
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
                View Jenga Table Top Companion
              </Button>
            </Card.Body>
          </Card>
          <Card className="tiles mt-3 pb-5">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/mike.png`} />
            <Card.Body className="">
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                Here you can find out about me and what makes me tick. 
              </Card.Text>
              <Button 
                className="mb-1 mr-3"
                variant="primary"
                onClick={showAboutMeModal}
              >
                Learn More About Mike
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
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
    </div>
  );
}

export default App;
