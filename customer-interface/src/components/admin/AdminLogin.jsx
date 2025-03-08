import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../../styles/admin/AdminLogin.scss';
const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const LoginData = {
            username, 
            password
        };
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(LoginData),
            });
            const data = await response.json();

            if (response.ok) {
                setSuccessMessage(data.message);
                setErrorMessage(''); 
                setTimeout(() => {
                    navigate('/admin/dashboard'); // Redirect after 2 seconds
                }, 2000);
            } else{
                setErrorMessage(data.message || 'Invalid credentials');   
                setSuccessMessage('');         
            }
        } catch (error) {
            console.error('Error', error);
            setErrorMessage('An error occured. Please try again later.');
            setSuccessMessage('');
        }
    }
    return (
        <div className="adminLogin-container">
         <div className="adminLogin-device">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                 />
                 <br></br>
                 <label htmlFor="password">Password:</label>
                <input type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                 />
                 <br></br>
                 <button className="submit" type="submit">Login</button>

            </form>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
        </div>
       
    )
}
export default AdminLogin;