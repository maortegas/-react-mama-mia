import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();


const urlBase ="/pizzas.json"
export const MyProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [compras, setCompras] = useState([]);



  const getPizzas = async () => {
    const response = await fetch(urlBase)
    const data = await response.json()

    setPizzas(data);
  };

  useEffect(() => {
    getPizzas()
  }, []);

  return (
    <MyContext.Provider value={{ pizzas, total, setTotal, compras, setCompras }}>
      {children}
    </MyContext.Provider>
  );
};
