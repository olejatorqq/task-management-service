import axios from 'axios';

const API_URL = process.env.REACT_APP_AUTH_SERVICE_URL;

export const login = async (credentials) => {
    return axios.post(`${API_URL}/login`, credentials);
};

export const register = async (user) => {
    return axios.post(`${API_URL}/register`, user);
};
