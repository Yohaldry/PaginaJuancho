import React from "react";
import WhatsApp from "./Components/WhatsApp";
import AppPrincipal from "./Containers/AppPrincipal";
import Img from "./Containers/Img";
import Seccion1 from "./Containers/Seccion1";
import './main.css'


function App() {
  return (
    <div>
     <AppPrincipal />
     <Img />
     <Seccion1 />
    </div>
  );
}

export default App;
