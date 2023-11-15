import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Total = () => {
    const { compras } = useContext(MyContext);
    const total = compras.reduce((sum, item) => sum + (item.quantity*item.price),0);
     

  return <>{new Intl.NumberFormat("es-CL").format(total)}</>;
};

export default Total;
