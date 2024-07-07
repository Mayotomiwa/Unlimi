import { Container } from "react-bootstrap";
import UserTable from "../components/bodyComponents/UserTable";
import "../styles/body.css";

export default function Body() {


  return (
    <Container fluid className="bg-body-tertiary">
      <h3 className="p-5">Department List</h3>
      <UserTable />
    </Container>
  );
}
