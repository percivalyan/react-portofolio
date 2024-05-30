import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ReactPorto from "../assets/img/project/react_porto2.png";
import LaravelHima from "../assets/img/project/laravel_hima.png";
import InvenPhp from "../assets/img/project/inven_php.png";
import InvenFlutter from "../assets/img/project/inven_flutter.jpg";
import SpringApi from "../assets/img/project/spring_api.png";
import ReactForm from "../assets/img/project/react_form.png";
import HeroImage from "../assets/img/commandseal.png";

import Seminar1 from "../assets/img/seminar/seminar1.jpg";
import Seminar2 from "../assets/img/seminar/seminar2.jpg";
import Seminar3 from "../assets/img/seminar/seminar3.jpg";

const HomePage = () => {
  const redirectToGitHub = () => {
    window.open('https://github.com/percivalyan', '_blank');
  };
  
  const redirectToForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScOtO4ULHWztIwVa5yLdPbz8y-evjvR8sjaQsP8d3ti2iJ0Qw/viewform', '_blank');
  }

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center header">
        <Container>
          <Row className="header-box d-flex align-items-center responsive-flex-column">
            <Col lg="6" className="text-center">
              <h1 className="mb-4">
                <span>Ryanda Deanova</span><br />
               Full Stack Web Developer <br />
              </h1>
              <p className="mb-4">
              May I enjoy my life and art. Respected for all men in all time. Always accompanied by happiness and blessed by fortune.
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-danger btn-lg rounded-5 me-2 mb-xs-0 mb-2" onClick={redirectToGitHub}>My Project</button>
                <button className="btn btn-outline-danger btn-lg rounded-5 me-2 mb-xs-0 mb-2">Curriculum Vitae</button>
              </div>
            </Col>

            <Col lg="6" className="py-1 text-center">
              <img src={HeroImage} alt="Hero" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </header>
      
      {/* About Me Section */}
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
                Saya Ryanda Deanova, mahasiswa semester 5, memiliki ketertarikan dalam dunia Teknologi dan Informatika, saya mengagumi perkembangan zaman dan perdaban
                mulai dari kisah tentang matematika kuno ada, kalkulator sederhana sampai perkembangan bahasa pemrograman dan komputer cerdas ada.
              </p>
            </Col>
            <Col xs={12} md={6} className="text-center">
              <p>
                Saya saat ini selalu aktif belajar tentang hal baru yang berhubungan dengan IT, mulai dari programming, machine learning, AI, dan lain-lain.
                <br /> <br />Semoga ilmu saya bermanfaat dan kita semua sehat selalu.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* My Project Section */}
      <div className="my-project w-100 min-vh-100 section-background d-flex align-items-center">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className='title-text'>My Project Work</h1><br />
              <p>Berbagai Projek yang pernah saya kerjakan.</p><br />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <ProjectBox image={ReactPorto} title="React Porto" description="Portofolio pertama saya menggunakan React dan Vite" />
            <ProjectBox image={LaravelHima} title="Web Hima" description="Projek Laravel Himpunan Mahasiswa" />
            <ProjectBox image={InvenPhp} title="Web Gudang" description="Website Gudang" />
            <ProjectBox image={InvenFlutter} title="Aplikasi Gudang" description="Aplikasi Android Gudang" />
            <ProjectBox image={SpringApi} title="Spring API" description="Spring API" />
            <ProjectBox image={ReactForm} title="Formulir React" description="Front End React Formulir" />
          </Row>
        </Container>
      </div>

      {/* Certificate Section */}
      <div className="certificate w-100 min-vh-100 section-background d-flex align-items-center">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className='title-text'>Certificate</h1>
              <p>Berbagai Sertifikat saya.</p> <br />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <ProjectBox image={Seminar1} title="THE POWER OF ARTIFICIAL INTELLIGENCE SYSTEM FOR BRINGS INDONESIA TO THE INDUSTY 5.O" />
            <ProjectBox image={Seminar2} title="BIG DATA ANALYSIS FOR CYBER SECURITY IN NATIONAL DATA SECURITY SYSTEM"  />
            <ProjectBox image={Seminar3} title="METAVERSE AS FUTURE VIRTUAL TECHNOLOGY INNOVATION"  />
          </Row>
        </Container>
      </div>

      {/* Critique Me Section */}
      <div className="critique-me w-100 min-vh-100 section-background d-flex align-items-center">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className='title-text'>Criticism and Suggestions</h1>
              <p>Kritik dan beri saya Saran untuk saya lebih baik ke depannya. Terima kasih semuanya.</p><br />
              <button className="btn btn-outline-danger btn-lg rounded-5 me-2 mb-xs-0 mb-2" onClick={redirectToForm}>Criticism and Suggestions</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

const ProjectBox = ({ image, title, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <Col md="4" className="mb-4 text-center">
      <div className="photo-box shadow-box" onClick={toggleDescription}>
        <img src={image} alt={title} className="img-fluid project-image" />
        {showDescription && (
          <div className="project-overlay">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
          </div>
        )}
      </div>
    </Col>
  );
};

export default HomePage;
