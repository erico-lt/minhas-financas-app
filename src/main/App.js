import React from "react";
import { Rotas } from "./Rotas";
import {PrimeReactProvider} from "../../node_modules/primereact/api"

import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/slate/bootstrap.css';
import '../custom.css';

import 'toastr/build/toastr.min.css'

import 'primereact/resources/themes/nova-accent/theme.css'
import 'primereact/resources/primereact.min.css'

function App() {
  const value = {
    appendto: 'self',
    ...PrimeReactProvider
  }

  return (
    <PrimeReactProvider value={value}>
      <Rotas />
    </PrimeReactProvider>
    
  )
}
export default App;
