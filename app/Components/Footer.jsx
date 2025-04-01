import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="text-center text-md-start">
          {/* Column 1 */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5>About Us</h5>
            <p>
            We are committed to fostering a dynamic learning environment that promotes academic excellence, innovation, and holistic development. 
           
            </p>
          </Col>

          {/* Column 2 */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li>
                <Link href="/About" className="text-white text-decoration-none">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-decoration-none">Contact</Link>
              </li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: RamanujanAcademicInstitute@gmail.com</p>
            <p>Phone: +91 97587 88286</p>
            <p>Address: Near Ramleela Ground,LinePar,Moradabad.</p>
          </Col>
        </Row>

        <hr className="my-4" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">© {new Date().getFullYear()} wwww.ramanujanacademicinstitute.com. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
