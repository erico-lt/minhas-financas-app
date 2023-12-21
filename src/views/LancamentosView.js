import { useState } from "react";
import {Button} from "primereact/button"
import {Dialog} from "primereact/dialog"

import Card from "../coponents/Card";
import FormGroup from "../coponents/FormGroup";
import SelectMenu from "../coponents/SelectMenu";
import * as menssagens from "../coponents/toastr";
import LancamentoService from "../main/app/service/LancamentoService";
import localStorageService from "../main/app/service/LocalStorageService";
import LancamentoMenu from "./lancamento/LacamentoMenu";
import { useNavigate } from "react-router-dom";

function LancamentosView() {
    const [ano, setAno] = useState('');
    const [mes, setMes] = useState('');
    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [lancamentos, setArray] = useState([]);
    const [statusDialog, setStatusDialog] = useState(false);
    const service = new LancamentoService();
    const meses = service.obterMeses();
    const tipos = service.obterTiposSalvarLancamento();    
    const [idAux, setIdAux] = useState();
    const navigate = useNavigate();

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

    const confirmarEdicaoItem = (id) => {        
        navigate(`/cadastrar-lancamentos/${id}`);        
    }

    const confirmarDelecao = (id) => {
        setStatusDialog(true);
        setIdAux(id);       
    }

    const cancelarDelecao = () => {
        setStatusDialog(false);
        setIdAux(null);
    }

    const deletar = () => {
        const usuario = localStorageService.buscarItem('usuario');

        service.deletarLancamento(
            idAux
        ).then(response => {
            setStatusDialog(false);
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
                setArray(respnse.data)
                menssagens.mensagemSucesso("Lancamento Deletado com sucesso");
            });

        }).catch(erro => {
            menssagens.mensagemAlert("Problema ao deletar o item");
        });
    }

    const footerContent = (
        <div>            
            <Button label="Confirmar" icon="pi pi-times" onClick={() => deletar()} className="p-button-text" />
            <Button label="Cancelar" icon="pi pi-check"  onClick={() => cancelarDelecao()} autoFocus />
        </div>
    );

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
                                    <button className="btn btn-sm btn-danger" onClick={() => {navigate('/cadastrar-lancamentos/ ')}}>Cadastrar</button>
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
                        <LancamentoMenu lancamento={lancamentos} deletarLancamento={confirmarDelecao} editarItem = {confirmarEdicaoItem} className="table table-hover" />
                    </div>
                </div>
            </div>

            <Dialog header="Escolhas" modal={true} visible={statusDialog} style={{ width: '35vw' }} onHide={() => setStatusDialog(false)} footer={footerContent}>
                <p className="m-0">
                    Deseja excluir este Lançamento?
                </p>
            </Dialog>
        </>
    );
}

export default LancamentosView;



