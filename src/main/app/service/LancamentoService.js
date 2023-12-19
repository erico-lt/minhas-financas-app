import ApiService from "../ApiService";

export default class LancamentoService extends ApiService {

    constructor() {
        super('/api/lancamentos/');
    }

    obterMeses() {
        return [
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
        ]
    }

    obterTipos() {
        return [
            { label: 'SELECIONE...', value: '' },
            { label: 'Receita', value: 'RECEITA' },
            { label: 'Despesa', value: 'DESPESA' },
        ]
    }

    obterTiposSalvarLancamento() {
        return [
            { label: 'SELECIONE...', value: '' },
            { label: 'Receita', value: 0},
            { label: 'Despesa', value: 0},
        ]
    }

    buscar(lancamentoFiltro) {        
        let params = `?id_usuario=${lancamentoFiltro.id}`;

        if (lancamentoFiltro.ano) {
            params = `${params}&ano=${lancamentoFiltro.ano}`;
        }

        if (lancamentoFiltro.mes) {
            params = `${params}&mes=${lancamentoFiltro.mes}`;
        }

        if (lancamentoFiltro.tipo) {
            params = `${params}&tipo=${lancamentoFiltro.tipo}`
        }

        if (lancamentoFiltro.descricao) {
            params = `${params}&descricao=${lancamentoFiltro.descricao}`
        }

        return this.get(params);
    }

    deletarLancamento(url){
        
        return this.delete(`/${url}`);
    }

    salvarLancamento(corpo) {
        return this.post('',corpo);
    }

    buscarPorId(id) {
        return this.get(id);
    }

    atualizarLancamento(corpo) {
        return this.put(corpo.id, corpo);
    }
}