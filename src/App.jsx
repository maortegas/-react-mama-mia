import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import MyRoutes from "./routes/MyRoutes";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <MyRoutes />
    </div>
  );
};

export default App;
