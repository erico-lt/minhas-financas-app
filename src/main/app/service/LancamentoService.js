import ApiService from "../ApiService";

import ErroValidacao from "../exceptions/ErroValidacao";

export default class LancamentoService extends ApiService {

    constructor() {
        super('/api/lancamentos/');
    }

    validar (lancamento) {
        const mensagens = [];

        if (!lancamento.descricao) {
            mensagens.push("Descricao vazia, adicione uma descrição");
        }

        if (!lancamento.mes) {
            mensagens.push("Mes vazio, adicione um mes valido");
        }

        if (!lancamento.ano) {
            mensagens.push("Ano vazio, adicione um ano ao lancamento");
        }

        if (!lancamento.valor) {
            mensagens.push("Valor vazio, adicione um valor acima de 0");
        }

        if (!lancamento.tipo) {
            mensagens.push("Tipo vazio, adicione um tipo valido");
        }

        if (mensagens && mensagens.length > 0) {
            throw new ErroValidacao(mensagens);
        }
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

    obterStatus() {
        return [
            { label: 'SELECIONE...', value: '' },
            { label: 'Pendente', value: 0 },
            { label: 'Cancelado', value: 1 },
            { label: 'Efetivado', value: 2 },
        ]
    }

    obterTiposSalvarLancamento() {
        return [
            { label: 'SELECIONE...', value: '' },
            { label: 'Receita', value: 0 },
            { label: 'Despesa', value: 1 },
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
        
        return this.delete(`${url}`);
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

    atualizarStatus (id, status) {
        const lancamentoDTO = {status: status}
        return this.put(`${id}/atualizar-status`, lancamentoDTO);
    }
}