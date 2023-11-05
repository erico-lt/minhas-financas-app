import { useState } from "react";
import Card from "../coponents/Card";
import FormGroup from "../coponents/FormGroup";
import SelectMenu from "../coponents/SelectMenu";
import LancamentoService from "../main/app/service/LancamentoService";
import LancamentoMenu from "./lancamento/LacamentoMenu";
import localStorageService from "../main/app/service/LocalStorageService";

function LancamentosView() {
    const [ano, setAno] = useState('');
    const [mes, setMes] = useState('');
    const [tipo, setTipo] = useState('');           
    const service = new LancamentoService();
    const [lancamentos, setArray] = useState([]);
    
    const meses = [
        { label: 'SELECIONE...', value: '' },
        { label: 'Janeiro', value: 1 },
        { label: 'Fevereiro', value: 2 },
        { label: 'Março', value: 3 },
        { label: 'Abril', value: 4 },
        { label: 'Maio', value: 5 },
        { label: 'Junho', value: 6 },
        { label: 'Julho', value: 7 },
        { label: 'Agosto', value: 8 },
        { label: 'Setembro', value: 9 },
        { label: 'Outubro', value: 10 },
        { label: 'Novembro', value: 11 },
        { label: 'Dezembro', value: 12 },
    ];

    const tipos = [
        { label: 'SELECIONE...', value: '' },
        { label: 'Receita', value: 'RECEITA' },
        { label: 'Despesa', value: 'DESPESA' },
    ];    

    const buscarItems = () => {
        const usuario = localStorageService.buscarItem('usuario');              
        
        const lancamentoFiltro = {
            id: usuario.id,
            ano: ano,
            mes: mes,
            tipo: tipo            
        }          

        service.buscar(
           lancamentoFiltro       
        ).then(response => {
            setArray(response.data);
        }).catch(erro => {
            console.log(erro.response)
        })
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
                        <LancamentoMenu lancamento={lancamentos} className="table table-hover" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LancamentosView;



