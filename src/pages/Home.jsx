import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import Card from "../components/Card";
import { Container, Row, Col } from "react-bootstrap/";

const Home = () => {
  const { pizzas, agregaCarro } = useContext(MyContext);

  return (
    <div className="pt-2">
      <Container>
        <Row>
          {pizzas.map((pizza) => (
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

