import React, { useState } from 'react';
import axiosInstance from '../axiosInstance'; // Import the Axios instance
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
    const [task, setTask] = useState({ name: '', isCompleted: false, deadline: '', firstName: '', lastName: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axiosInstance.post('/tasks', task); // Adjusted to use the instance
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Task Name" onChange={(e) => setTask({ ...task, name: e.target.value })} />
            <input type="date" onChange={(e) => setTask({ ...task, deadline: e.target.value })} />
            <input type="text" placeholder="First Name" onChange={(e) => setTask({ ...task, firstName: e.target.value })} />
            <input type="text" placeholder="Last Name" onChange={(e) => setTask({ ...task, lastName: e.target.value })} />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;