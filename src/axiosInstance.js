import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://crudapi.co.uk/api/v1/task', // Replace with your CRUD API URL
    headers: {
        'Authorization': `Bearer KL43lRlqnQGxhn3B99VIcEdCNMq2w0Sz3u7yinQPv9JKZd8OUA`, // Replace with your actual API key
        'Content-Type': 'application/json' // Ensure JSON content type
    }
});

export default axiosInstance;