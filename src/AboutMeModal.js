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
            About Me
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
              for my father's construction company. I realized that I 
              did not want to stay in the field when I started developing 
              an interest in programming and technology. 
            </p>
          </Col>
          </Row>
          </Container>
        </BModal.Body>
        <BModal.Footer>
        </BModal.Footer>
      </BModal>
    );
  }

  export default AboutMeModal;