import BModal from 'react-bootstrap/Modal';
import { Row, Col, Container } from 'react-bootstrap';

const AboutMeModal = ({ ...props}) => {

    return (
      <BModal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <BModal.Header closeButton>
          <BModal.Title id="contained-modal-title-vcenter">
            About Mike
          </BModal.Title>
        </BModal.Header>
        <BModal.Body>
          <Container>
          <Row>
          <Col className="block-example border border-dark p-3">
            <p>
              I am a person with a sense of adventure. I have
              traveled around the united states and I experienced
              many unique and interesting things along the way.
            </p>
            <p> 
              I grew up pouring concrete and spent many years working
              for my father's construction company. I learned many 
              skills working in the field that are directly related 
              to the app development process.
            </p>
            <p>
              I decided to pursue a career as Front End Developer 
              when I began taking an interest in application 
              design and technology in general. 
            </p>
          </Col>
          </Row>
          </Container>
        </BModal.Body>
      </BModal>
    );
  }

  export default AboutMeModal;