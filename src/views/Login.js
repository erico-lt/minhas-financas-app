import React from "react";

import Card from "../coponents/Card";
import FormGroup from "../coponents/FormGroup";

class Login extends React.Component {    

    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log('Email', this.state.email)
        console.log('Senha', this.state.senha)
    }

    render() {           
        return (     
                  
            <div className="container container-fluid">
                <div className="row">
                    <div className="col-md-6 position-absolute top-40 start-50 translate-middle-x">
                        <div className="bs-docs-section">
                            <Card title="Login" >
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <FormGroup label="Email: *" htmlFor="email">
                                                <input type="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                                            </FormGroup>

                                            <FormGroup label="Password: *" htmlFor="senha">
                                                <input type="password" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} className="form-control" id="senha" placeholder="Password" />
                                            </FormGroup>

                                            <div className="layoutbutton mt-3">
                                                <button type="button" onClick={this.entrar} className="btn btn-info btn-sm badge rounded-pill">ENTRAR</button>
                                                <button type="button" className="btn btn-danger btn-sm badge rounded-pill">CADASTRAR</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;