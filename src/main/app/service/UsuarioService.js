import ApiService from "../ApiService"

class UsuarioService extends ApiService {
    
    constructor (){
        super('api/usuarios');
    }

    validar (usuario){       
        const msg = [];
        if(!usuario.nome){
            msg.push("Adicione um nome");
        }
        
        if(!usuario.email) {
            msg.push("Campo de email obrigatorio");
        } else if(!usuario.email.match(/^[a-z0-9]+@[a-z]+\.[a-z]/)){
            msg.push("Digite um email valido");
        }

        if (!usuario.senha || !usuario.senhaConfirmacao) {
            msg.push("Deve digitar a senha duas vezes");
        } else if (usuario.senha !== usuario.senhaConfirmacao){
            msg.push("As senhas não coecidem");
        }

        return msg;
    }

    autenticar (corpo){                
        return this.post('/autenticar',corpo);                
    }

    saldo (url) {        
        return this.get(`/${url}/saldo`);
    }

    salvarUsuario (corpo) {
        return this.post('',corpo);
    }
    
}

export default UsuarioService;
