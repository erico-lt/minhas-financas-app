import React from "react";
import { Rotas } from "./Rotas";

import 'bootswatch/dist/morph/bootstrap.css';
import '../custom.css';
import { NavBar } from "../coponents/NavBar";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Rotas />
      </>
    )
  }
}
export default App;
