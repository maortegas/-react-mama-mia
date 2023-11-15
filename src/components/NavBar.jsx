import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Total from "./Total";

const NavBar = () => {
     const { total } = useContext(MyContext);

  return (
    <div className="navbar__container">
      <div className="nav__bar">
        <img src="/pizza.png" alt="" width={40} />
        <NavLink to="/">Pizzería Mamma Mia!</NavLink>
      </div>
      <div>
        <div className="nav__bar">
          <NavLink to="/carrito/">
            <img src="/carrito.png" width={40}  alt="" />
            <Total />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
