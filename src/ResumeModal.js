import resume from './resume.PNG';
import resumePDF from './Resume.pdf';
import BModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container, Image } from 'react-bootstrap';

const ResumeModal = ({ ...props}) => {

    let onCloseClick = props.onCloseClick;

    return (
      <BModal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <BModal.Header closeButton>
          <BModal.Title id="contained-modal-title-vcenter">
            Michael Stagg's Resume
          </BModal.Title>
        </BModal.Header>
        <BModal.Body>
          <Container>
          <Row>
          <Col className="block-example border border-dark">
            <embed 
              src={resumePDF}
              type="application/pdf"
              width="100%"
              height="600px"
            />
          </Col>
          </Row>
          </Container>
        </BModal.Body>
        <BModal.Footer>
          {/* <Button onClick={onCloseClick}>Close</Button> */}
        </BModal.Footer>
      </BModal>
    );
  }

  export default ResumeModal;