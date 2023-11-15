import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import Card from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Home = () => {
  const {pizzas, setCompras, compras} = useContext(MyContext);

  const agregaCarro = pizza=> {
    if (compras.find((elemento) => elemento.id === pizza.id)) {
      const producto = compras.map((item) =>
        item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return setCompras([...producto]);
    }
    else
    {
      pizza.quantity=1
    }
   setCompras([...compras, pizza]);
 }

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

