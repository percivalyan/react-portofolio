import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import CertificateImage1 from "../assets/img/seminar/seminar1.jpg";
import CertificateImage2 from "../assets/img/seminar/seminar2.jpg";
import CertificateImage3 from "../assets/img/seminar/seminar3.jpg";

const Certificate = () => {
  return (
    <div className="certificate w-100 min-vh-100 section-background d-flex align-items-center">
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className='title-text'>Certificate</h1>
            <p>Berbagai Sertifikat saya.</p><br />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <CertificateBox image={CertificateImage1}/>
          <CertificateBox image={CertificateImage2}/>
          <CertificateBox image={CertificateImage3}/>
        </Row>
      </Container>
    </div>
  );
}

const CertificateBox = ({ image, title }) => {
  return (
    <Col md="4" className="mb-4 text-center">
      <div className="photo-box shadow-box">
        <img src={image} alt={title} className="img-fluid project-image" />
        <div className="project-overlay">
          <h3 className="project-title">{title}</h3>
          {/* You can add additional details like issuer, date, etc. if needed */}
        </div>
      </div>
    </Col>
  );
};

export default Certificate;
