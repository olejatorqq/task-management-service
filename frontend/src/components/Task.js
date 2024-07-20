import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Task = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_TASK_SERVICE_URL}/tasks`);
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div className="container">
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Task;