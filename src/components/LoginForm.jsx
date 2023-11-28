import React, {useCallback, useState} from 'react';

import '../styles/LoginForm.css';

const LoginForm = ({ show, onClose, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const handleLogin = useCallback((e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            onLogin();
            onClose();
        } else {
            setIsError(true);
        }
    }, [username, password, onLogin, onClose]);

    if (!show) {
        return null;
    }

    return (
        <div className="login-background" onClick={onClose}>
            <div className="login" onClick={(e) => e.stopPropagation()} style={isError ? {height: '300px'} : {height: '270px'}}>
                <div className="login-header">
                    <h2>Login</h2>
                    {isError ? <p style={{color:'red'}}>Invalid login or password</p> : null}
                </div>
                <form className="login-form" action="">
                    <label htmlFor="username"><b>Username</b></label>
                    <input id="username" className="input-form" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                    <label htmlFor="password"><b>Password</b></label>
                    <input id="password" className="input-form" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <label htmlFor="checkbox"><input id="checkbox" type="checkbox"/>  Remember me</label>

                    <button className="submit-button" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
