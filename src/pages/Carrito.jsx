import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Carrito = () => {
  const { compras } = useContext(MyContext);
  //style="max-width: 540px;"
  return (
    <>
      {compras.map((pizza) => (
        <div className="container " key={pizza.id}>
          <div className="d-flex ">
            <div className="d-flex align-items-center gap-2">
              <img src={pizza.img} alt="" width={200} />
              <h3>{pizza.name}</h3>
            </div>
            <div className="d-flex col justify-content-end">
              <p>{pizza.quantity * pizza.price}</p>
              <button>-</button>
              <p>{pizza.quantity}</p>
              <button>+</button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Carrito;
