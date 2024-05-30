import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Criticism = ({ buttonText, formUrl }) => {
  const redirectToForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScOtO4ULHWztIwVa5yLdPbz8y-evjvR8sjaQsP8d3ti2iJ0Qw/viewform', '_blank');
  }

  return (
    <div className="criticism-section w-100 min-vh-100 section-background d-flex align-items-center">
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="title-text">Criticism and Suggestions</h1>
            <p>Kritik dan beri saya Saran untuk saya lebih baik ke depannya. Terima kasih semuanya.</p><br />
            <button className="btn btn-outline-danger btn-lg rounded-5 me-2 mb-xs-0 mb-2" onClick={redirectToForm}>Criticism and Suggestions</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Criticism;
