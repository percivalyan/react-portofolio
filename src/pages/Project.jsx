import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import ReactPorto from "../assets/img/project/react_porto2.png";
import LaravelHima from "../assets/img/project/laravel_hima.png";
import InvenPhp from "../assets/img/project/inven_php.png";
import InvenFlutter from "../assets/img/project/inven_flutter.jpg";
import SpringApi from "../assets/img/project/spring_api.png";
import ReactForm from "../assets/img/project/react_form.png";



const Project = ({ title, description, projects }) => {
  return (
    <div className="margin-commy-project w-100 min-vh-100 section-background d-flex align-items-center">
        <Container>
          <Row></Row>
          <Row>
           
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

  );
};

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

export default Project;
