import resume from './resume.PNG';
import BModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container, Image, ResponsiveEmbed } from 'react-bootstrap';

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
          <Col className="block-example border border-dark pr-1 pt-4">
            <Image src={resume} className="float-left pl-0 pb-4"/>
            {/* <div style={{ width: 660, height: 'auto' }}>
              <ResponsiveEmbed aspectRatio="16by9">
                <embed type="image/svg+xml" src={resume} />
              </ResponsiveEmbed>
            </div> */}
            {/* <div style={{width: 500, height: 'auto'}}>
            <ResponsiveEmbed a16by9>
              <embed type="image/svg+xml" src={resume} />
            </ResponsiveEmbed>
            </div> */}
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