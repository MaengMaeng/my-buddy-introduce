import React, { useEffect, useState } from 'react';

const Test = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        fetch('/api')
            .then(res => res.json())
            .then(data => setUsername(data.username));
    })

    return (
        <div>username : {username}</div>
    )
}

export default Test;