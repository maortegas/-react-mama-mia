import { useContext } from "react";
import Total from "../components/Total";
import { MyContext } from "../context/MyContext";

const Carrito = () => {
  const { compras, eliminaCarro, agregaCarro } = useContext(MyContext);

  return (
    <>
      {compras.map((pizza) => (
        <div className="container pt-3 " key={pizza.id}>
          <div className="d-flex ">
            <div className="d-flex align-items-center gap-2">
              <img src={pizza.img} alt="" width={200} />
              <h3>{pizza.name}</h3>
            </div>
            <div className="d-flex col justify-content-end text-center align-items-center">
              <p className="pt-3 pe-2">
                {" "}
                $
                {new Intl.NumberFormat("es-CL").format(
                  pizza.quantity * pizza.price
                )}
              </p>
              <button
                className="btn btn-danger"
                onClick={(e) => eliminaCarro(pizza)}
              >
                -
              </button>
              <p className="pt-3  ps-2 pe-2">{pizza.quantity}</p>
              <button
                className="btn btn-primary"
                onClick={(e) => agregaCarro(pizza)}
              >
                +
              </button>
            </div>
          </div>
          <hr />
        </div>
      ))}
      <div className="container ">
        <h1>
          {" "}
          Total: $
          <Total />
        </h1>
      </div>
    </>
  );
};

export default Carrito;
