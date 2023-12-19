import axios from "axios";

const httpClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default class ApiService {
    constructor(apiUrl){
        this.apiUrl = apiUrl;
    } 

    post(url, corpo){
        const request = `${this.apiUrl}${url}`;
        return httpClient.post(request, corpo);
    }

    delete(url) {
        const request = `${this.apiUrl}${url}`;
        return httpClient.delete(request);
    }

    put(id, corpo) {
        const request = `${this.apiUrl}${id}`;
        return httpClient.put(request, corpo);
    }

    get(url){
        const request = `${this.apiUrl}${url}`;
        return httpClient.get(request);
    }      
}