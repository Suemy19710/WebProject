// utils/api.js - Add this to your existing API utilities

import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'https://luatkimngoc.com' || 'localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to add token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    
    // If the error is due to an invalid or expired token
    if (error.response?.status === 401 && !originalRequest._retry) {
      // Remove the invalid token
      localStorage.removeItem('token');
      
      // Redirect to login page
      window.location.href = '/admin';
      return Promise.reject(error);
    }
    
    return Promise.reject(error);
  }
);

// Your existing login function
export const login = async (loginData) => {
  try {
    const response = await api.post('/api/login', loginData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

// Add other API calls you need
export const verifyToken = async () => {
  try {
    const response = await api.get('/api/admin/verify-token');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Token verification failed');
  }
};

export default api;