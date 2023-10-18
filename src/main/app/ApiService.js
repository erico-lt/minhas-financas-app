import axios from "axios";

const httpClient = axios.create({
    baseURL:'http://localhost:8080',    
    headers: {'Content-Type': 'application/json',
            'Accept': 'application/json'}
});

class ApiService{
    
    constructor(apiUrl){
        this.apiUrl = apiUrl;
    } 

    // get(url, corpo) {
        
    //     const request = `${this.apiUrl}${url}`;        
    //     return httpClient.get(request, corpo);
    // }

    post(url, corpo){
        const request = `${this.apiUrl}${url}`;
        return httpClient.post(request, corpo);
    }

    delete(url) {
        const request = `${this.apiUrl}${url}`;
        return httpClient.delete(request);
    }

    put(url, corpo) {
        const request = `${this.apiUrl}${url}`;
        return httpClient.put(request, corpo);
    }

    get(url){
        const request = `${this.apiUrl}/${url}/saldo`;
        return httpClient.get(request);
    }    
    
}

export default ApiService;