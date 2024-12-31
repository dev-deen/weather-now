import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/current.json',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;