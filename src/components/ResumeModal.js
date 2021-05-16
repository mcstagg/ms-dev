import BModal from 'react-bootstrap/Modal';
import { Row, Col, Container } from 'react-bootstrap';

const ResumeModal = ({ ...props}) => {

    return (
      <BModal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <BModal.Header closeButton className="p-2">
          <BModal.Title id="contained-modal-title-vcenter" className="pl-0">
            Michael Stagg's Resume
          </BModal.Title>
        </BModal.Header>
        <BModal.Body 
          className="p-1"
        >
          <Container>
            <Row className="p-0"> 
              <Col className="block-example border border-dark p-0">
                {/* <embed 
                  src={`${process.env.PUBLIC_URL}/Resume.pdf`}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                /> */}
                <object
                  data="https://drive.google.com/file/d/1974biQqFdM_2WCHlEbQ4k-VQaYC1tM2P/view?usp=sharing"
                  width="100%"
                  height="600px"
                >
                </object>
              </Col>
            </Row>
          </Container>
        </BModal.Body>
      </BModal>
    );
  }

  export default ResumeModal;