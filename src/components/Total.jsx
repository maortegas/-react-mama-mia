import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Total = () => {
    const { compras } = useContext(MyContext);
    const total = compras.reduce((sum, item) => sum + (item.quantity*item.price),0);

  return <>{total}</>;
};

export default Total;
