import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Pizzas from "../pages/Pizzas";
import Carrito from "../pages/Carrito";
import NotFound from "../pages/NotFound";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizzas/:id" element={<Pizzas />} />
      <Route path="/carrito/" element={<Carrito />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MyRoutes;
