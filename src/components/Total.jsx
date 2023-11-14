import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Total = () => {
    const { compra } = useContext(MyContext);
    const total = compra.reduce((sum, item) => sum + item.price,0);
    
  return <>{total}</>;
};

export default Total;
