import React, { useState } from "react";

import { useEffect } from "react";
import Card from "../coponents/Card";
import UsuarioService from "../main/app/service/UsuarioService";
import localStorageService from "../main/app/service/LocalStorageService";

export function Home() {    
    const [saldo, setSaldo] = useState(0);
    const service = new UsuarioService();

    useEffect(() =>{
        const usuarioString = localStorageService.buscarItem('usuario')
        const usuario = JSON.parse(usuarioString);        
        service.saldo(usuario.id
        ).then(response => {
            setSaldo(response.data);
        }).catch(erro => {
            console.log(erro.response);
        })
    })

    return (
        <div className="container">
            <Card title="Bem Vindo!">
                <p className="lead">Esse é seu sistema de finanças</p>
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