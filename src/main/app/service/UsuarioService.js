import apiService from "../ApiService";

class UsuarioService extends apiService {
    
    constructor(){
        super('api/usuarios');
    }

    autenticar(corpo){        
        console.log(corpo)
        return this.post('/autenticar',corpo);                
    }

    saldo(url) {        
        return this.get(url)
    }
}

export default UsuarioService;
