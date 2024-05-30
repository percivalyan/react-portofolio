import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const redirectToGitHub = () => {
  window.open('https://github.com/percivalyan', '_blank');
};

const FooterComponent = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="text-center mb-3">
            <h5 className='title-text'>My Quote</h5>
            <p>May I enjoy my life and art. Respected for all men in all time. Always accompanied by happiness and blessed by fortune.</p>
          </Col>
          <Col md={4} className="text-center mb-3">
            <h5 className='title-text'>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>
          <Col md={4} className="text-center mb-3">
            <h5 className='title-text'>Contact Us</h5>
            <p>Email: <a href="mailto:arimaryand@gmail.com">arimaryand@gmail.com</a></p>
            <p>Instagram: <a href="https://instagram.com/renaissan.ryand" target="_blank" rel="noopener noreferrer">@renaissan.ryand</a></p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0 copyright" onClick={redirectToGitHub} style={{ cursor: 'pointer' }}>
              &copy; 2024 Percivalyan. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
