import axios from "axios";

export const httpClient = axios.create({
    // baseURL: "http://localhost:7164/api/v1",
    baseURL: "https://kersti-ilutuba.azurewebsites.net/api/v1",
    headers: {
        "Content-type": "application/json"
    }
});

export default httpClient;

