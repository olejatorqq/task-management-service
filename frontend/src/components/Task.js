import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('/api/tasks').then(response => setTasks(response.data));
    }, []);

    const handleAddTask = useCallback((e) => {
        e.preventDefault();
        axios.post('/api/tasks', { title, description }).then(response => {
            setTasks([...tasks, response.data]);
            setTitle('');
            setDescription('');
        });
    }, [title, description, tasks]);

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
    }, [handleAddTask]);

    return (
        <div className="container">
            {ReactHtmlParser(`
                <form id="task-form">
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" required />
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control" id="description" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Add Task</button>
                </form>
                <ul class="list-group mt-4" id="task-list"></ul>
            `)}
            <ul className="list-group mt-4">
                {tasks.map(task => (
                    <li key={task.id} className="list-group-item">
                        <h5>{task.title}</h5>
                        <p>{task.description}</p>
                        <p><strong>Completed:</strong> {task.completed ? "Yes" : "No"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task;
