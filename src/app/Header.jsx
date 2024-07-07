import { Container, Navbar } from "react-bootstrap";
import unlimiLogo from "../assets/images/unlimi.svg";
import ProfileSection from "../components/headerComponent/ProfileSection";
import SearchBar from "../components/headerComponent/SearchBar";
import "../styles/header.css";

export default function Header() {
  return (
    <Navbar className="bg-body-primary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img alt="Unlimi Logo" src={unlimiLogo} className="d-inline-block align-top logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <div className="d-flex align-items-center">
            <SearchBar />
          </div>
          <div className="d-flex align-items-center">
            <ProfileSection />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
