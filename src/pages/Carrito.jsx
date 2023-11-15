import { useContext } from "react";
import Total from "../components/Total";
import { MyContext } from "../context/MyContext";

const Carrito = () => {
  const { compras, eliminaCarro, agregaCarro } = useContext(MyContext);

  return (
    <>
      <div className="container pt-5 ">
        <h2>Detalle del pedido</h2>
        {compras.map((pizza) => (
          <div key={pizza.id}>
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
      </div>
      <div className="container ">
        <h1>
          Total: $
          <Total />
        </h1>
        <button type="button" class="btn btn-success">
          Ir a Pagar
        </button>
      </div>
    </>
  );
};

export default Carrito;
