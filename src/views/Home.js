import React, { useState } from "react";

import Card from "../coponents/Card";
import axios from "axios";
import { useEffect } from "react";

export function Home() {    
    const [saldo, setSaldo] = useState(0);

    useEffect(() =>{
        const usuarioString = localStorage.getItem('usuario');
        const usuario = JSON.parse(usuarioString);
        axios.get(`http://localhost:8080/api/usuarios/${usuario.id}/saldo`,   
        ).then(response => {
            setSaldo(response.data);
        }).catch(erro => {
            console.log(erro.response);
        })
    })

    return (
        <div className="container">
            <Card title="Bem Vindo!">
                <p className="lead">Esse é seu sistema de ficnanças</p>
                <p className="lead">Seu saldo para o mês atual é de: {saldo}</p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>

                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="/cadastro-usuarios" role="button">
                        <i className="bi bi-person-up"></i>
                        <span className="ms-1">Cadastrar Usuário</span>
                    </a>
                    <a className="btn btn-danger btn-lg" href="https://bootswatch.com/flatly/#" role="button">
                        <i className="bi bi-file-earmark-plus-fill"></i>
                        <span className="ms-1">Cadastrar Lançamento</span>
                    </a>
                </p>
            </Card>
        </div>
    )

}