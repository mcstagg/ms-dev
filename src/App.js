import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import AboutMeModal from './components/AboutMeModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Card, CardDeck } from 'react-bootstrap';

const App = () => {

  const [aboutMeModalShow, setAboutMeModalShow] = useState(false);

  const showAboutMeModal = () => {
    setAboutMeModalShow(true);
  }

  return (

    <div className="lock-min pb-3 body">
      <Banner/>
      
      <Row className="">
        <Col className="ml-3 mr-3">
        <CardDeck className="justify-content-center">
        <Card className="tiles mt-3">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/hulu.PNG`} />
            <Card.Body className="pt-3">
              <Card.Title>Hulu 2.0 Reproduction</Card.Title>
              <Card.Text>
                I built this app as a reproduction of Hulu 2.0 using Next.js and 
                Tailwind CSS. The app is built mobile first and uses a 
                combo of grid and flexbox to properly display the app responsively up to 4k. It includes cool features such as server side rendering and lazy loading. It also makes use of the new Tailwind Just In Time (JIT) compiler. The images and movie info are fetched from the The Movie Database (TMDb).
              </Card.Text>
              <Button
                className="mt-2"
                variant="primary" 
                onClick={
                  ()=> window.open(
                    "https://hulu-2-reproduction.vercel.app/", 
                    "_blank"
                  )
                }
              >
                Use Hulu 2.0 Reproduction
              </Button>
            </Card.Body>
          </Card>
          <Card className="tiles mt-3">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/concrete.PNG`} />
            <Card.Body className="pt-0 mt-3">
              <Card.Title>Concrete Volume Calculator</Card.Title>
              <Card.Text>
                I built this app as a takeoff calculator that processes dimensions, calculates the individual totals, and then displays the total cubic yardage for the pour. The customer is then able to place the order by calling the API which Proxies to a Lambda Express Server. In the server the order is confirmed and confirmation is sent back to the client. 
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
                Use Concrete Volume Calculator
              </Button>
            </Card.Body>
          </Card>
          <Card className="tiles mt-3">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/jenga.PNG`} />
            <Card.Body className="pt-2 mt-2">
              <Card.Title>Jenga Table Top Compainion</Card.Title>
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
                Use Jenga Table Top Companion
              </Button>
            </Card.Body>
          </Card>
          <Card className="tiles mt-3 pb-5">
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/mike.png`} />
            <Card.Body className="">
              <Card.Title>About Mike</Card.Title>
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

      <AboutMeModal
        show={aboutMeModalShow} 
        onHide={
          () => setAboutMeModalShow(false)
        }
        showAboutMeModal={showAboutMeModal}
      />
    </div>
  );
}

export default App;
