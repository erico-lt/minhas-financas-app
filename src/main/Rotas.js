import React from "react";

import { Route, Routes } from "react-router-dom";
import Login from "../views/Login";
import CadastroUsuario from "../views/CadastroUsuario";

export function Rotas() {
    return(        
        <Routes>                      
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<CadastroUsuario/>}/>
        </Routes>
    )
}