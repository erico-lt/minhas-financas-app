import React, { useState } from "react";

import Card from "../coponents/Card";
import FormGroup from "../coponents/FormGroup";
import { useNavigate } from "react-router-dom";

function Login (){

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        console.log('Email', email)
        console.log('Senha', senha)
    }


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
                                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                                        </FormGroup>

                                        <FormGroup label="Password: *" htmlFor="senha">
                                            <input type="password" onChange={(e) => setSenha(e.target.value)} className="form-control" id="senha" placeholder="Password" />
                                        </FormGroup>

                                        <div className="layoutbutton mt-3">
                                            <button type="button" onClick={entrar} className="btn btn-info btn-sm badge rounded-pill">ENTRAR</button>
                                            <button type="button" onClick={() => {navigate('/cadastro-usuarios') }} className="btn btn-danger btn-sm badge rounded-pill">CADASTRO</button>
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

export default Login;