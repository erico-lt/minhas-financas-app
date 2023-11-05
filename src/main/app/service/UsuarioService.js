import ApiService from "../ApiService"

class UsuarioService extends ApiService {
    
    constructor(){
        super('api/usuarios');
    }

    autenticar(corpo){                
        return this.post('/autenticar',corpo);                
    }

    saldo(url) {        
        return this.get(`/${url}/saldo`);
    }

    salvarUsuario(corpo) {
        return this.post('',corpo);
    }
    
}

export default UsuarioService;
