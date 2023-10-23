import React, { useState } from 'react';

function Login() {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle login logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username or Email:
                <input type="text" value={usernameOrEmail} onChange={(event) => setUsernameOrEmail(event.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
