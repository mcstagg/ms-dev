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
          <Col className="block-example border border-dark">
            <h1>About Me</h1>
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