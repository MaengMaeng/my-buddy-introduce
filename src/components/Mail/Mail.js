import React, { useState } from 'react';

const Mail = () => {
    const [toMail, setToMail] = useState();

    const onSendMail = () => {
        fetch('/mail/send', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({toMail})
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    return (
        <>
            <input type="text" value={toMail} onChange={e => setToMail(e.target.value)}/>
            <button onClick={onSendMail}>
                Send Mail
            </button>
        </>
    )
}

export default Mail;