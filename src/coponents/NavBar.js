import React from "react";
import { NavBarItem } from "./NavBarItem";

export function NavBar() {

    return (

        <nav className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark" style={{ fontSize: '20px' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{ fontWeight: 'bolder' }}>Minhas Financas</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navegacao" arial-controls="navegacao" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navegacao">
                    <ul className="navbar-nav me-auto">
                        <NavBarItem to="/home" className="nav-link" label="Home">
                            <span className="visually-hidden">(current)</span>
                        </NavBarItem>

                        <NavBarItem to="/cadastro-usuarios" className="nav-link" label="Cadastrar Usuario"/>                                   

                        <NavBarItem to="/buscar-lancamentos" className="nav-link" label="Lancamentos"/>                       

                        <NavBarItem to="/login" className="nav-link" label="Login"/>                                                                      
                    </ul>
                </div>
            </div>
        </nav>
    )
}