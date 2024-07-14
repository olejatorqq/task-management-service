import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_TASK_SERVICE_URL}/tasks`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                });
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks', error);
            }
        };

        fetchTasks();
    }, [auth]);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
