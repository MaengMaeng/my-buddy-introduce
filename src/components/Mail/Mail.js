import React, { useContext, useState } from 'react';
import { LoginContext } from '../../Store/LoginContext';

const Mail = () => {
    const [toMail, setToMail] = useState();
    const { logged, profile } = useContext(LoginContext);

    const onSendMail = () => {
        if(logged){
            fetch('/mail/test', {
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
    }

    const onSendInvite = () => {
        console.log(toMail);
        if(logged){
            fetch('/mail/invite', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({fromName:profile.username,toMail})
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                })
        }
    }
    
    return (
        <>
            <input type="text" defaultValue={toMail} onChange={e => setToMail(e.target.value)}/>
            {/* <button onClick={onSendMail}>
                Send Mail
            </button> */}
            <button onClick={onSendInvite}>
                Send Invite Mail
            </button>
        </>
    )
}

export default Mail;