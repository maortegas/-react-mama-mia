import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, ListGroup, Button } from "react-bootstrap";
import { MyContext } from "../context/MyContext";

const Pizzas = () => {
  const { id } = useParams();
  const { pizzas } = useContext(MyContext);

  let pizza = pizzas.filter((elemento) => elemento.id == id);

return (
  <Container>
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-6 p-3">
          <img src={pizza[0].img} className="img-fluid rounded-start" alt="" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{pizza[0].name}</h5>
            <hr  className="m-0"/>
            <p className="card-text p-0 ">{pizza[0].desc}</p>
            <h6>Ingredientes:</h6>
            <ListGroup className="list-group list-group-flush fs-6 ">
              {pizza[0].ingredients.map((ingrediente) => (
                <ListGroup.Item
                  className="list-group-item-light border-0 p-0"
                  key={ingrediente}
                >
                  <img src="/pizza.png" alt="" width={24} className="pe-2" />
                  {ingrediente}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <br />
            <div className="d-flex justify-content-between">
              <h1>${pizza[0].price}</h1>
              <Button variant="danger">Añadir</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
}
export default Pizzas;
