import React, { useState, useEffect } from 'react';
import axios from 'axios';
import htmlContent from '../../static/tasks.html';
import parse from 'html-react-parser';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('/api/tasks').then(response => setTasks(response.data));
    }, []);

    useEffect(() => {
        const form = document.getElementById('task-form');
        if (form) {
            form.addEventListener('submit', handleAddTask);
        }
        return () => {
            if (form) {
                form.removeEventListener('submit', handleAddTask);
            }
        };
    }, [title, description]);

    const handleAddTask = (e) => {
        e.preventDefault();
        axios.post('/api/tasks', { title, description }).then(response => {
            setTasks([...tasks, response.data]);
            setTitle('');
            setDescription('');
        });
    };

    return (
        <div>
            {parse(htmlContent)}
            <ul className="list-group mt-4">
                {tasks.map(task => (
                    <li key={task.id} className="list-group-item">
                        <h5>{task.title}</h5>
                        <p>{task.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task;