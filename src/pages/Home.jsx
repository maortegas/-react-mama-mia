import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Home = () => {
  const { pizzas, agregaCarro } = useContext(MyContext);

  return (
    <div>
      <Container>
        <Row>
          {pizzas.map(pizza => (
            <Col xs={12} md={6} lg={4} key={pizza.id} className="p-5">
              <Card pizza={pizza} agregaCarro={agregaCarro} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;

