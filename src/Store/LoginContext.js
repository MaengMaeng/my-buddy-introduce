import React, { useState } from 'react';

export const LoginContext = React.createContext();

const LoginProvider = ({children}) => {
    const [logged, setLogged] = useState(false);
    const [profile, setProfile] = useState({
        username:'',
        image:'',
        email:''
    })

    const onLogin = (profile) => {
        setProfile(profile);
        setLogged(true);
    }
    
    const onLogout = () => {
        setProfile({image:'', username:'', email:''});
        setLogged(false);
    }

    const init = {
        logged,
        profile,

        onLogin,
        onLogout
    };

    return (
        <LoginContext.Provider value={init}>{children}</LoginContext.Provider>
    )
}

export default LoginProvider;