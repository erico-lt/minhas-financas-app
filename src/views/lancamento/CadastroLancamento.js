import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../coponents/Card";
import FormGroup from "../../coponents/FormGroup";
import SelectMenu from "../../coponents/SelectMenu";
import LancamentoService from "../../main/app/service/LancamentoService";
import localStorageService from "../../main/app/service/LocalStorageService";
import * as mensagens from '../../coponents/toastr'
import { useMemo } from "react";


export default function CadastroLancamento() {
    const service = useMemo(() => {
        return new LancamentoService();
    },[]); 
    const meses = service.obterMeses();
    const tipos = service.obterTiposSalvarLancamento();
    const status = service.obterStatus();
    const [descricao, setDescricao] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');
    const [statu, setStatu] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();   
    const [atualizando, setAtualizando] = useState(false);
    
    const mudarPagina = () => {
        navigate('/home')
    }  
    
    useEffect(() => {              

        if(id) {            
            
            service.buscarPorId(id)
            .then(response => {   
                setAtualizando(true);
                setDescricao(response.data.descricao);
                setMes(response.data.mes);
                setAno(response.data.ano);
                setValor(response.data.valor);
                setTipo(response.data.tipo);                            
                setStatu(response.data.status);      

            }).catch(erro => {
                mensagens.mensagemErro(erro.response.data);
            })
        }
    }, [id, service]);

    const atualizarLancamentos = () => {
        const usuario = localStorageService.buscarItem('usuario')
        const lancamento ={
            id,
            descricao,
            mes,
            ano,
            valor,
            tipo,
            usuario: usuario.id
        };  
        service.atualizarLancamento(lancamento)
        .then(response => {
            navigate("/buscar-lancamentos");
            mensagens.mensagemSucesso("Lancamento atualizado com sucesso!")            
        }).catch(erro => {
            mensagens.mensagemErro("Erro ao atualizar lancamento");
        });
    }


    const salvarLancamento = () => {
        const usuario = localStorageService.buscarItem('usuario')               

        const lancamento = {
            descricao: descricao,
            mes: mes,
            ano: ano,
            valor: valor,
            tipo: tipo,
            usuario: usuario.id
        }

        try {
            service.validar(lancamento);
        } catch (error) {
            const msgs = error.mensagens;

            msgs.forEach(element => mensagens.mensagemErro(element));

            return false;
        }        

        service.salvarLancamento(
            lancamento
        ).then(response => {
            mensagens.mensagemSucesso("Lancamento cadastrado com sucesso");
            navigate("/buscar-lancamentos");
        }).catch(erro => {
            mensagens.mensagemErro("Erro ao cadastrar Lancamento");
        })

    }

    return (
        <>
            <div className="container">
                <Card title={atualizando ? "Atualizando Lançamento" : "Cadastro lançamento"}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="bs-componente">
                                <FormGroup htmlFor="inputDescricao>" label="Descrição: *">
                                    <input type="text" value={descricao} onChange={(event) => setDescricao(event.target.value)} className="form-control" id="inputDescricao" placeholder="Descrição"></input>
                                </FormGroup>

                                <FormGroup htmlFor="inputMes>" label="Mês: *">
                                    <SelectMenu value ={mes} lista={meses} onChange={(event) => setMes(event.target.value)} className="form-control" id="inputMes"></SelectMenu>
                                </FormGroup>

                                <FormGroup htmlFor="inputAno" label="Ano: *">
                                    <input type="number" value={ano} onChange={(event) => setAno(event.target.value)} className="form-control" id="inputAno" placeholder="Ano"></input>
                                </FormGroup>

                                <FormGroup htmlFor="inputValor" label="Valor: *">
                                    <input type="number" value={valor} onChange={(event) => setValor(event.target.value)} className="form-control" id="inputValor" placeholder="Valor"></input>
                                </FormGroup>

                                <FormGroup htmlFor="inputTipo" label="Tipo: *">
                                    <SelectMenu lista={tipos} value={tipo} onChange={(event) => setTipo(event.target.value)} className="form-control" id="inputTipo"></SelectMenu>
                                </FormGroup>
                               
                                <FormGroup htmlFor="inputStatus" label="Status: *">
                                    <SelectMenu lista={status} disabled value={statu} className="form-control" id="inputStatus" placeholder="Status"/>
                                </FormGroup>

                            </div>

                            <div className="btn-group">    
                            {atualizando ?                                    
                                     <button onClick={atualizarLancamentos} className="btn btn-lg btn-success">Atualizar</button>
                                    : 
                                    <button onClick={salvarLancamento} className="btn btn-lg btn-success">Salvar</button>                                    
                            }                                                                                  
                                <button onClick={mudarPagina} className="btn btn-lg btn-danger">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}