import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Card from "../coponents/Card";
import FormGroup from '../coponents/FormGroup';
import UsuarioService from "../main/app/service/UsuarioService";
import { mensagemSucesso, mensagemErro, mensagemAlert } from "../coponents/toastr";

function CadastroUsuario() {

    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');     
    const service = new UsuarioService();    

    const mudarPagina = () => {
        navigate('/login')
    }    

    const cadastrarUsuario = () => {        
        const usuarioValidar = {
            nome,
            email,
            senha,
            senhaConfirmacao
        }
        const validar = service.validar(usuarioValidar);
        
        if (validar && validar.length > 0 ) {
            validar.forEach((msg, index) =>{
                mensagemAlert(msg);
            });
            return false;
        }

        service.salvarUsuario({
            nome: nome,
            email: email,
            senha: senha
        }).then(response => {
            mensagemSucesso("Usuario cadastrado com sucesso");            
            navigate('/login');
        }).catch(erro => {
            mensagemErro(erro.response.data.message);
            
        })
    }

    return (
        <div className="container">
            <Card title="CADASTRO USUARIO">
                <div className="row">                   
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
                                <button type="button" onClick={cadastrarUsuario} className="btn btn-success">Salvar</button>
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