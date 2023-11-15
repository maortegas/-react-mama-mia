import { Card as CardB, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyContext";


const Card = ({ pizza, agregaCarro }) => {
  const navigate = useNavigate();
 

  return (
    <CardB style={{ width: "18rem" }}>
      <CardB.Img variant="top" src={pizza.img} />
      <CardB.Body>
        <CardB.Title>{pizza.name}</CardB.Title>
        <hr />
        <h6>Ingredientes:</h6>
        <ListGroup className="list-group list-group-flush ">
          {pizza.ingredients.map((ingrediente) => (
            <ListGroup.Item
              className="list-group-item-light border-0"
              key={ingrediente}
            >
              <img src="/pizza.png" alt="" width={24} className="pe-2" />
              {ingrediente}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <hr />
        <CardB.Text className="text-center fs-3">
          ${new Intl.NumberFormat("es-CL").format(pizza.price)}
        </CardB.Text>
        <div className="d-flex justify-content-around">
          <Button
            variant="info"
            onClick={(e) => navigate(`/pizzas/${pizza.id}`)}
          >
            Ver Más
          </Button>
          <Button variant="danger" onClick={(e) => agregaCarro(pizza)}>
            Añadir
          </Button>
        </div>
      </CardB.Body>
    </CardB>
  );
};

export default Card;