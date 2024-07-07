import { useContext } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import DataContext from '../../contexts/DataContext';
import '../../styles/header.css';

export default function SearchBar() {
  const { setSearchQuery } = useContext(DataContext);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Form inline className="ml-auto">
      <Row className="align-items-center">
        <Col xs="auto" className="input-with-icon">
          <FaSearch className="search-icon" />
          <Form.Control
            type="text"
            placeholder="Search by patients..."
            className="mr-sm-2 search-control"
            onChange={handleSearch}
          />
        </Col>
      </Row>
    </Form>
  );
}
