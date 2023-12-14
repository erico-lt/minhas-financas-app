import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../coponents/Card";
import FormGroup from "../../coponents/FormGroup";
import SelectMenu from "../../coponents/SelectMenu";
import LancamentoService from "../../main/app/service/LancamentoService";
import localStorageService from "../../main/app/service/LocalStorageService";
import * as mensagens from '../../coponents/toastr'


export default function CadastroLancamento() {
    const service = new LancamentoService();
    const meses = service.obterMeses();
    const tipos = service.obterTiposSalvarLancamento();
    const [descricao, setDescricao] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {        
        console.log("editando", id);
    })

    const mudarPagina = () => {
        navigate('/home')
    }

    const validar = () => {
        const msg = [];

        if (!descricao) {
            msg.push("Adicione uma descrição ao lancamento");
        }

        if (!mes) {
            msg.push("Campo mês vazio");
        }

        if (!ano) {
            msg.push("O ano de cadastro não pode ser vazio");
        }

        if (valor <= 0) {
            msg.push("O valor não pode ser menor ou igual a 0");
        }

        if (!tipo) {
            msg.push("Campo tipo vazio");
        }

        return msg;
    }

    const salvarLancamento = () => {
        const usuario = localStorageService.buscarItem('usuario')

        if(validar() && validar().length > 0) {

            validar().forEach((element) =>{
                mensagens.mensagemAlert(element);
            });

            return false;
        }           

        const lancamentoSalar = {
            descricao: descricao,
            mes: mes,
            ano: ano,
            valor: valor,
            tipo: tipo,
            usuario: usuario.id
        }

        service.salvarLancamento(
            lancamentoSalar
        ).then(response => {
            mensagens.mensagemSucesso("Lancamento cadastrado com sucesso");
        }).catch(erro => {
            mensagens.mensagemErro("Erro ao cadastrar Lancamento");
        })

    }

    return (
        <>
            <div className="container">
                <Card title="Cadastrar Lançamentos">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="bs-componente">
                                <FormGroup htmlFor="inputDescricao>" label="Descrição: *">
                                    <input type="text" onChange={(event) => setDescricao(event.target.value)} className="form-control" id="inputDescricao" placeholder="Descrição"></input>
                                </FormGroup>

                                <FormGroup htmlFor="inputMes>" label="Mês: *">
                                    <SelectMenu onChange={(event) => setMes(event.target.value)} className="form-control" id="inputMes" lista={meses}></SelectMenu>
                                </FormGroup>

                                <FormGroup htmlFor="inputAno" label="Ano: *">
                                    <input type="number" onChange={(event) => setAno(event.target.value)} className="form-control" id="inputAno" placeholder="Ano"></input>
                                </FormGroup>

                                <FormGroup htmlFor="inputValor" label="Valor: *">
                                    <input type="number" onChange={(event) => setValor(event.target.value)} className="form-control" id="inputValor" placeholder="Valor"></input>
                                </FormGroup>

                                <FormGroup htmlFor="inputTipo" label="Tipo: *">
                                    <SelectMenu lista={tipos} onChange={(event) => setTipo(event.target.value)} className="form-control" id="inputTipo" placeholder="Valor"></SelectMenu>
                                </FormGroup>

                            </div>

                            <div className="btn-group">
                                <button onClick={salvarLancamento} className="btn btn-lg btn-success">Salvar</button>
                                <button onClick={mudarPagina} className="btn btn-lg btn-danger">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}