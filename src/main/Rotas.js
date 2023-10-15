import React from "react";


import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../coponents/NavBar";
import CadastroUsuario from "../views/CadastroUsuario";
import { Home } from "../views/Home";
import Login from "../views/Login";

export function Rotas() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro-usuarios" element={<CadastroUsuario />} />
                    <Route path="*" element={<Navigate to="/login"/>}></Route>
                </Routes>
            </BrowserRouter>
           
        </>
    )
}