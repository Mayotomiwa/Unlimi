import { Col, Container, Row } from "react-bootstrap";
import { FaBell, FaChevronDown } from "react-icons/fa";
import ProfileLogo from "../../assets/images/profile.svg";
import "../../styles/header.css";

export default function ProfileSection() {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col xs="auto">
          <FaBell size={20} />
        </Col>
        <Col xs="auto">
          <img src={ProfileLogo} alt="Profile" className="profile-img" />
        </Col>
        <Col xs="auto">
          <h4 className="user-name">Deko</h4>
        </Col>
        <Col>
          <FaChevronDown />
        </Col>
      </Row>
    </Container>
  );
}
