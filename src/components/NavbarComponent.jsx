import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { navLinks } from '../data/index';

const redirectToInstagram = () => {
  window.open('https://instagram.com/renaissan.ryand', '_blank');
};

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  // useEffect(() => {
  //   changeBackgroundColor();
  //   window.addEventListener("scroll", changeBackgroundColor);
  //   return () => {
  //     window.removeEventListener("scroll", changeBackgroundColor);
  //   };
  // }, []);

  return (
    <div>
      <Navbar
        style={{
          backgroundColor: changeColor ? 'rgba(250, 200, 100, 0.8)' : 'rgba(250, 200, 100, 0.5)',
          border: 'none',
          boxShadow: '0px 2px 4px rgba(20, 10, 0, 0.4)',
          position: 'fixed',
          width: '100%',
          top: 0,
          zIndex: 1000
        }}
        expand="lg"
        className={changeColor ? 'color-active' : ""}
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold text-danger">Supernova.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}
                    end
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            <div className="text-center">
              <button className="btn btn-outline-danger" onClick={redirectToInstagram}>Contact Me</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
