import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance'; // Import the Axios instance
import { Link } from 'react-router-dom';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const response = await axiosInstance.get('/tasks'); // Adjusted to use the instance
            setTasks(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const deleteTask = async (id) => {
        await axiosInstance.delete(`/tasks/${id}`); // Adjusted to use the instance
        fetchTasks(); // Refresh the list
    };

    return (
        <div>
            <h1>Task List</h1>
            <Link to="/add">Add Task</Link>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span>{task.name} - {task.isCompleted ? 'Completed' : 'Not Completed'}</span>
                        <Link to={`/edit/${task.id}`}>Edit</Link>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;