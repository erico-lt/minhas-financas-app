import React from "react";


import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../coponents/NavBar";
import CadastroUsuario from "../views/CadastroUsuario";
import { Home } from "../views/Home";
import Login from "../views/Login";
import LancamentosView from "../views/LancamentosView";
import CadastroLancamento from "../views/lancamento/CadastroLancamento";

export function Rotas() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
                    <Route path="/buscar-lancamentos" element={<LancamentosView />} />      
                    <Route path="/cadastrar-lancamentos/:id" element={<CadastroLancamento />} />              
                    <Route path="*" element={<Navigate to="/home"/>}></Route>
                </Routes>
            </BrowserRouter>
           
        </>
    )
}