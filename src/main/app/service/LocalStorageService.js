
export default class localStorageService {
    static adicionarItem(chave, valor) {
        return localStorage.setItem(chave, JSON.stringify(valor));
    }
    static buscarItem(chave) {
        return localStorage.getItem(chave);
    }
}