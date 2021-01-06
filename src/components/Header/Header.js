import React, { useContext, useState } from 'react';
import './Header.css';

import { LoginContext } from '../../Store/LoginContext';
import Login from '../Login/Login';

const Header = () => {
    const { logged, profile } = useContext(LoginContext);

    return (
        <>
            <div className='header'>
                <div className='logo'>
                    logo
                </div>
                <div className='user-state'>
                    {
                        logged && (
                            <div className='profile'>
                                <div className='profile__image'>
                                    <img src={profile.image} alt=""/>
                                </div>
                                <div className='profile__name'>
                                    {profile.username}
                                </div>
                            </div>
                        )
                    }
                    <Login/>
                </div>
            </div>

        </>
    )
}

export default Header;