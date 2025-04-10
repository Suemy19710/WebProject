// src/utils/api.js
export const apiRequest = async (url, method = 'GET', data = null) => {
    const token = localStorage.getItem('token');
    
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` })
        }
    };

    if (data) {
        config.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, config);
        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Request failed');
        }

        return result;
    } catch (error) {
        throw error;
    }
};

// Example specific functions
export const login = (credentials) => 
    apiRequest('https://luatkimngoc-vn.onrender.com/api/login', 'POST', credentials);

export const getProtectedData = () => 
    apiRequest('https://luatkimngoc-vn.onrender.com/api/protected');