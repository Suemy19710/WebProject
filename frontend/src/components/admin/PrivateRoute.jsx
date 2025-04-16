// components/PrivateRoute.jsx
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios'; // Assuming you're using axios

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }
      
      try {
        // Make a request to your backend to verify the token
        const response = await axios.get('/api/admin/verify-token', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          // Token is invalid
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        }
      } catch (error) {
        // Handle expired or invalid tokens
        console.error("Token verification failed:", error);
        localStorage.removeItem('token');
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    verifyToken();
  }, []);
  
  if (isLoading) {
    // Show loading indicator while checking authentication
    return <div className="loading">Verifying authentication...</div>;
  }
  
  return isAuthenticated ? children : <Navigate to="/admin" replace />;
};

export default PrivateRoute;