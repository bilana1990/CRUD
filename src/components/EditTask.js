import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const API_URL = 'https://crudapi.co.uk/api/v1/tasks'; // თქვენი API URL
const API_KEY = 'KL43lRlqnQGxhn3B99VIcEdCNMq2w0Sz3u7yinQPv9JKZd8OUA'; // თქვენი API Key

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ name: '', isCompleted: false, deadline: '', firstName: '', lastName: '' });

  useEffect(() => {
    const fetchTask = async () => {
      const response = await axios.get(`${API_URL}/${id}`, { headers: { 'Authorization': `Bearer ${API_KEY}` } });
      setTask(response.data);
    };

    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${API_URL}/${id}`, task, { headers: { 'Authorization': `Bearer ${API_KEY}` } });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={task.name} onChange={handleChange} required />
      <input type="date" name="deadline" value={task.deadline} onChange={handleChange} required />
      <input type="text" name="firstName" value={task.firstName} onChange={handleChange} required />
      <input type="text" name="lastName" value={task.lastName} onChange={handleChange} required />
      <button type="submit">Update Task</button>
    </form>
  );
}

export default EditTask;