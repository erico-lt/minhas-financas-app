import React from "react";

import Card from "../coponents/Card";
import FormGroup from '../coponents/FormGroup'

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaConfirmacao: ''
    }

    salvar = () => {
        console.log(this.state)        
    }

    render() {

        return (
            <div className="container">
                <Card title="CADASTRO USUARIO">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputNome">
                                    <input type="text" value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} className="form-control" id="inputNome" name="nome" aria-describedby="preenchimentoNome" placeholder="Digite seu nome" />
                                </FormGroup>

                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} className="form-control" id="inputEmail" name="email" aria-describedby="emailhelp" placeholder="Email" />
                                    <small id="emailhelp" className="from-text text-muted">Seu email e dados não sera divulgado.</small>
                                </FormGroup>

                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                    <input type="password" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} className="form-control" id="inputSenha" name="senha" placeholder="Senha" />
                                </FormGroup>

                                <FormGroup label="Confirmar Senha: *" htmlFor="repetirSenha">
                                    <input type="password" value={this.state.senhaConfirmacao} onChange={(e) => this.setState({ senhaConfirmacao: e.target.value })} className="form-control" id="repetirSenha" name="senha" placeholder="Senha" />
                                </FormGroup>

                                <div className="mt-2">
                                    <button onClick={this.salvar} type="button" className="btn btn-success">Salvar</button>
                                    <button type="button" className="btn btn-danger ">Voltar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }

}

export default CadastroUsuario;