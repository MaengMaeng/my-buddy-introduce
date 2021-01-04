import React, { useState } from 'react';

export const LoginContext = React.createContext();

const LoginProvider = ({children}) => {
    const [logged, setLogged] = useState(false);
    const [profile, setProfile] = useState({
        username:'',
        image:'',
        type:''
    })

    const onLogin = (profile) => {
        setLogged(true);
        setProfile(profile);
    }
    
    const onLogout = () => {
        setLogged(false);
        setProfile({image:'', username:'', email:'', type:''});
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