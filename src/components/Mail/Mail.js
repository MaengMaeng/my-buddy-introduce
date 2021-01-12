import React, { useContext, useState } from 'react';
import { LoginContext } from '../../Store/LoginContext';

const Mail = () => {
    const [toMail, setToMail] = useState();
    const { logged, profile } = useContext(LoginContext);

    const onChangeHandler = (e) => {
        setToMail(e.target.value);
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
            <input type="text" defaultValue={toMail} onChange={onChangeHandler}/>
            <button onClick={onSendInvite}>
                Send Invite Mail
            </button>
        </>
    )
}

export default Mail;