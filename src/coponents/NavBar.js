import React from "react";

export function NavBar() {

    return (

        <nav className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark" style={{fontSize: '20px'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{fontWeight: 'bolder' }}>Minhas Financas</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacao" arial-controls="navegacao" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navegacao">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/usuarios">Usuarios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/lancamentos">Lancamentos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>            
    )    
}