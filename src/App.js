import React, { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/hello')
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(error => setMessage('Error: ' + error.message));
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>React + Spring Boot</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;