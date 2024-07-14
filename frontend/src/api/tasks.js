import axios from 'axios';

const API_URL = process.env.REACT_APP_TASK_SERVICE_URL;

export const fetchTasks = async (token) => {
    return axios.get(`${API_URL}/tasks`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
