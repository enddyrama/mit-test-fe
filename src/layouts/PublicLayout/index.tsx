import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import reactLogo from '../../assets/react.svg'


export default function PublicLayout() {
  return (
    <div style={{ height: `100vh`, display: "flex", background: "#383838" }}>
      <Row style={{ display: "flex", flex: 1 }}>
        <Col md={4} style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 10 }}>
          <img src={reactLogo} alt="React logo" style={{ width: `50%` }} />

        </Col>
        <Col style={{ display: "flex", flex: 1, }}>
          <Outlet />
        </Col>
      </Row>
    </div>

  );
}
