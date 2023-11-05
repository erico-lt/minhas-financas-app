import ApiService from "../ApiService";

export default class LancamentoService extends ApiService{

    constructor() {
        super('/api/lancamentos');
    }

    buscar(lancamentoFiltro) {        
        console.log(lancamentoFiltro)
        let params = `?id_usuario=${lancamentoFiltro.id}`;

        if(lancamentoFiltro.ano) {
            params = `${params}&ano=${lancamentoFiltro.ano}`;
        }

        if(lancamentoFiltro.mes) {
            params = `${params}&mes=${lancamentoFiltro.mes}`;
        }

        if(lancamentoFiltro.tipo) {
            params = `${params}&tipo=${lancamentoFiltro.tipo}`
        }

        return this.get(params);
    }
}