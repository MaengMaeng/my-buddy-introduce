import './Login.css';

import React, { useContext, useEffect, useState } from 'react';
import KakaoLogin from 'react-kakao-login';
import FacebookLogin from 'react-facebook-login';
import { LoginContext } from '../../Store/LoginContext';
import Modal from '../Modal/Modal';

const { Kakao } = window;
const { FB } = window;

const Login = () => {
    const { logged, profile, onLogin, onLogout } = useContext(LoginContext);
    const [visible, setVisible] = useState(false);

    const onOpen = (e) => {
        setVisible(true);
    }

    const onClose = (e) => {
        setVisible(false);
    }

    useEffect(() => {
        Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
        FB.init({
            appId: process.env.REACT_APP_FACEBOOK_APP_KEY,
            status: true,
            cookie: true,
            xfbml: true
        });
    }, []);

    const onKakaoSuccess = (res) => {
        const username = res.profile.kakao_account.profile.nickname;
        const image = res.profile.kakao_account.profile.thumbnail_image_url;
        const email = res.profile.kakao_account.email;
        const type = 'kakao';

        onLogin({ username, email, image, type });
        onClose();
    }

    const onFacebookSuccess = (res) => {
        console.log(res);

        const username = res.name;
        const image = res.picture ? res.picture.data.url : '';
        const email = res.email;
        const type = 'facebook';

        onLogin({ username, email, image, type });
        onClose();
    }

    const onSnsLogout = () => {
        if(profile.type === 'kakao'){
            // Kakao.Auth.logout();
        }
        else if(profile.type === 'facebook'){
            FB.logout();
        }

        onLogout();
    }

    return (
        <>
            {
                !logged ?
                    (
                        <div className='btn-login' onClick={onOpen}>
                            login
                        </div>

                    ) : (
                        <div className='btn-logout' onClick={onSnsLogout}>
                            logout
                        </div>
                    )
            }
            <Modal
                title='로그인'
                visible={visible}
                onClose={onClose}
            >
                <div className='login-form'>
                    <KakaoLogin
                        jsKey={process.env.REACT_APP_KAKAO_JS_KEY}
                        onSuccess={onKakaoSuccess}
                        onFailure={(res) => console.log('failure', res)}
                        getProfile={true}
                    />

                    <FacebookLogin
                        appId={process.env.REACT_APP_FACEBOOK_APP_KEY}
                        autoLoad={false}
                        fields="name,email, picture"
                        callback={onFacebookSuccess}
                    />
                </div>
            </Modal>
        </>
    )
}

export default Login;