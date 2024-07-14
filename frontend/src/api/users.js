import axios from 'axios';

const API_URL = process.env.REACT_APP_USER_SERVICE_URL;

export const fetchUser = async (token) => {
    return axios.get(`${API_URL}/user`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
