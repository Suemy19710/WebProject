import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {login} from '../../utils/api'; 
import '../../styles/admin/AdminLogin.scss';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginData = { username, password };

        try {
            const data = await login(loginData); // Use the api helper
            localStorage.setItem('token', data.token);
            setSuccessMessage(data.message);
            setErrorMessage('');
            setTimeout(() => navigate('/admin/dashboard'), 2000);
        } catch (error) {
            setErrorMessage(error.message || 'An error occurred');
            setSuccessMessage('');
        }
    };

    return (
        <div className="adminLogin-container">
            <div className="adminLogin-device">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <br />
                    <button className="submit" type="submit">Login</button>
                </form>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
        </div>
    );
};

export default AdminLogin;