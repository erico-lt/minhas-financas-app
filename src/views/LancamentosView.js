import { useState } from "react";
import Card from "../coponents/Card";
import FormGroup from "../coponents/FormGroup";
import SelectMenu from "../coponents/SelectMenu";
import LancamentoService from "../main/app/service/LancamentoService";
import LancamentoMenu from "./lancamento/LacamentoMenu";
import localStorageService from "../main/app/service/LocalStorageService";
import * as menssagens from "../coponents/toastr";

function LancamentosView() {
    const [ano, setAno] = useState('');
    const [mes, setMes] = useState('');
    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    const service = new LancamentoService();
    const [lancamentos, setArray] = useState([]);
    const meses = service.obterMeses();
    const tipos = service.obterTipos();

    const buscarItems = () => {
        const usuario = localStorageService.buscarItem('usuario');

        if (!ano) {
            menssagens.mensagemErro("O ano deve ser informado")
        }

        const lancamentoFiltro = {
            id: usuario.id,
            ano: ano,
            mes: mes,
            tipo: tipo,
            descricao: descricao
        }

        service.buscar(
            lancamentoFiltro
        ).then(response => {
            setArray(response.data);
        }).catch(erro => {
            console.log(erro.response)
        })
    }    

    const deletar = (id) => {
        const usuario = localStorageService.buscarItem('usuario');
        
        service.deletarLancamento(
            id    
        ).then(response => {                
            
            const lancamentoFiltro = {                
                id: usuario.id,
                ano: ano,
                mes: mes,
                tipo: tipo,
                descricao: descricao
            }
            service.buscar(
                lancamentoFiltro
            ).then(respnse => {                
                setArray(respnse.data);
                menssagens.mensagemSucesso("Lancamento Deletado com sucesso");                   
            });
        }).catch(erro => {
            menssagens.mensagemAlert("Problema ao deletar o item");
        });        
    }
        
    return (
        <>
            <div className="container">
                <Card title="Buscar Lancamentos">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="bs-component">
                                <FormGroup htmlFor="inputMes" label="Ano: *">
                                    <input type="number" className="form-control" id="inputMes" onChange={(event) => setAno(event.target.value)}
                                        placeholder="Digite o Ano" />
                                </FormGroup>

                                <FormGroup htmlFor="inputDescricao" label="Descricao: *">
                                    <input type="text" className="form-control" id="inputDescricao" onChange={(event) => setDescricao(event.target.value)}
                                        placeholder="Descrevar algo sobre o lancamento desejado" />
                                </FormGroup>

                                <FormGroup htmlFor="exampleSelect1" label="Mês: *">

                                    <SelectMenu className="form-control" lista={meses} id="exampleSelect1" onChange={(event) => setMes(event.target.value)} />


                                </FormGroup>

                                <FormGroup htmlFor="inputTipo" label="Tipo de Lancamento:">

                                    <SelectMenu lista={tipos} id="inputTipo" className="form-control" onChange={(event) => setTipo(event.target.value)} />

                                </FormGroup>

                                <div className="gtn-group mt-2">
                                    <button onClick={buscarItems} className="btn btn-sm btn-success">Buscar</button>
                                    <button className="btn btn-sm btn-danger">Cadastrar</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <br />

            <div className="row">
                <div className="col-lg-12">
                    <div className="page-header">
                        <h1 id="tables">Lançamentos</h1>
                    </div>
                    <div className="bs-component">
                        <LancamentoMenu lancamento={lancamentos} deletarLancamento={deletar} className="table table-hover" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LancamentosView;



