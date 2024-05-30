import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <div className="about-me w-100 min-vh-100 section-background d-flex align-items-center">
      <Container>
        <Row>
          <Col className="title-text text-center">
            <h1>About Me</h1><br />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="text-center">
            <p>
              Saya Ryanda Deanova, mahasiswa semester 5, memiliki ketertarikan dalam dunia Teknologi dan Informatika, saya mengagumi perkembangan zaman dan peradaban
              mulai dari kisah tentang matematika kuno ada, kalkulator sederhana sampai perkembangan bahasa pemrograman dan komputer cerdas ada.
            </p>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <p>
              Saya saat ini selalu aktif belajar tentang hal baru yang berhubungan dengan IT, mulai dari programming, machine learning, AI, dan lain-lain.
              <br /><br />Semoga ilmu saya bermanfaat dan kita semua sehat selalu.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
