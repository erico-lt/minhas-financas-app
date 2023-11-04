import Card from "../coponents/Card";
import FormGroup from "../coponents/FormGroup";
import SelectMenu from "../coponents/SelectMenu";
import LancamentoMenu from "./lancamento/LacamentoMenu";

function LancamentosView() {

    const meses = [
        {label: 'SELECIONE...', value: ''},
        {label: 'Janeiro', value: 1},
        {label: 'Fevereiro', value: 2},
        {label: 'Março', value: 3},
        {label: 'Abril', value: 4},
        {label: 'Maio', value: 5},
        {label: 'Junho', value: 6},
        {label: 'Julho', value: 7},
        {label: 'Agosto', value: 8},
        {label: 'Setembro', value: 9},
        {label: 'Outubro', value: 10},
        {label: 'Novembro', value: 11},
        {label: 'Dezembro', value: 12},
    ];

    const tipos = [
        {label: 'SELECIONE...', value: ''},
        {label: 'Receita', value: 'RECEITA'},
        {label: 'Despesa', value: 'DESPESA'},
    ];

    const lancamentos = [
        {id: 1, descricao: 'Salario', valor: '7.000,00', tipo: 'Receita', mes: '3', status: 'Pendente'}
    ];

    return (
        <>
            <div className="container">
                <Card title="Buscar Lancamentos">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="bs-component">
                                <form>
                                    <fieldset>
                                        <FormGroup htmlFor="inputMes" label="Ano: *">
                                            <input type="number" className="form-control" id="inputMes" aria-describedby="emailHelp"
                                                placeholder="Digite o Ano" />
                                        </FormGroup>

                                        <FormGroup htmlFor="exampleSelect1" label="Mês: *">

                                            <SelectMenu lista={meses} id="exampleSelect1"  className="form-control"/>  

                                        </FormGroup>

                                        <FormGroup htmlFor="inputTipo" label="Tipo de Lancamento:">

                                            <SelectMenu lista={tipos} id="inputTipo" className="form-control"/>
                                           
                                        </FormGroup>

                                        <div className="gtn-group mt-2">
                                            <button className="btn btn-sm btn-success">Buscar</button>
                                            <button className="btn btn-sm btn-danger">Cadastrar</button>
                                        </div>
                                    </fieldset>
                                </form>
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
                       <LancamentoMenu lancamento={lancamentos} className="table table-hover"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LancamentosView;



