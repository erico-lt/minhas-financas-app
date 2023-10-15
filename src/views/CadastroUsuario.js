import React, { useState } from "react";

import Card from "../coponents/Card";
import FormGroup from '../coponents/FormGroup'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CadastroUsuario() {

    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
    const [autenticar, setAutenticar] = useState(null);
    const [alert, setAlert] = useState('');   
    // const controller = new AbortController();
    // const signal = controller.signal; 

    const mudarPagina = () => {
        navigate('/login')
    }

    const salvar = () => {
        if (senha !== senhaConfirmacao) {
            setAlert("alert alert-dismissible alert-danger");
            setAutenticar("A Senha não corresponde")   
            //signal.aborted();
        }

        axios.post('http://localhost:8080/api/usuarios', {
            nome: nome,
            email: email,
            senha: senha
        }).then(response => {
            localStorage.setItem('usuario', JSON.stringify(response.data));
            navigate('/home');
        }).catch(erro =>{            
            console.log(erro.response)            
        })

        //controller.abort();
    }

    return (
        <div className="container">
            <Card title="CADASTRO USUARIO">
                <div className="row">
                    <div className="row">
                        <div className={alert}>
                            <span aria-hidden="true">{autenticar}</span>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" onChange={(evento) => setNome(evento.target.value)} className="form-control" id="inputNome" name="nome" aria-describedby="preenchimentoNome" placeholder="Digite seu nome" />
                            </FormGroup>

                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="email" onChange={(evento) => setEmail(evento.target.value)} className="form-control" id="inputEmail" name="email" aria-describedby="emailhelp" placeholder="Email" />
                                <small id="emailhelp" className="from-text text-muted">Seu email e dados não sera divulgado.</small>
                            </FormGroup>

                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password" onChange={(evento) => setSenha(evento.target.value)} className="form-control" id="inputSenha" name="senha" placeholder="Senha" />
                            </FormGroup>

                            <FormGroup label="Confirmar Senha: *" htmlFor="repetirSenha">
                                <input type="password" onChange={(evento) => setSenhaConfirmacao(evento.target.value)} className="form-control" id="repetirSenha" name="senha" placeholder="Senha" />
                            </FormGroup>

                            <div className="mt-2">
                                <button type="button" onClick={salvar} className="btn btn-success">Salvar</button>
                                <button type="button" onClick={mudarPagina} className="btn btn-danger ">Voltar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CadastroUsuario;