import { Container, Row, Col } from "react-bootstrap";
// import HeroImage from "../assets/img/hero.png";
import HeroImage from "../assets/img/commandseal.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
    <Row className="header-box d-flex align-items-center responsive-flex-column">
      <Col lg="6" className="text-center">
        <h1 className="mb-4">May <span>I enjoy</span> <br />my life and art <br /></h1>
        <p className="mb-4">respected for all men in all time. Always accompanied by happiness and blessed by fortune.</p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-danger btn-lg rounded-5 me-2 mb-xs-0 mb-2">My Project</button>
          <button className="btn btn-outline-danger btn-lg rounded-5 me-2 mb-xs-0 mb-2">Curriculum Vitae</button>
        </div>
      </Col>

      <Col lg="6" className="py-1 text-center">
        <img src={HeroImage} alt="Hero" className="img-fluid" />
      </Col>
    </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col className="text-center">
              <h1>My Project Work</h1>
              <p>My Heaven be my Alterlife</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;
