import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const urlBase ="/pizzas.json"
export const MyProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [compras, setCompras] = useState([]);

 const eliminaCarro = (pizza) => {
   if (compras.find((elemento) => elemento.id === pizza.id)) {
     const producto = compras.map((item) =>
       item.id === pizza.id ? { ...item, quantity: item.quantity - 1 } : item
     );
   
     if (producto[0].quantity<1) {
        const deletePizza= compras.filter(ele => ele.id !==pizza.id)
       return setCompras([...deletePizza]);
     }
     
      return setCompras([...producto]);
   } else {
     pizza.quantity = 1;
   }
   setCompras([...compras, pizza]);
 };

 const agregaCarro = (pizza) => {
   if (compras.find((elemento) => elemento.id === pizza.id)) {
     const producto = compras.map((item) =>
       item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
     );
     return setCompras([...producto]);
   } else {
     pizza.quantity = 1;
   }
   setCompras([...compras, pizza]);
 };

  const getPizzas = async () => {
    const response = await fetch(urlBase)
    const data = await response.json()

    setPizzas(data);
  };

  useEffect(() => {
    getPizzas()
  }, []);

  return (
    <MyContext.Provider
      value={{
        pizzas,
        compras,
        setCompras,
        eliminaCarro,
        agregaCarro
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
