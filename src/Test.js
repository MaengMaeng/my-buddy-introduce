import React, { useEffect, useState } from 'react';
import KakaoLogin from 'react-kakao-login';
import FacebookLogin from 'react-facebook-login';

const {Kakao} = window;
const {FB} = window;

const Test = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

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
        console.log('Kakao Login Success', res);

        setUsername(res.profile.kakao_account.profile.nickname);
        setEmail(res.profile.kakao_account.email);
    }

    const onFacebookSuccess = (res) => {
        console.log('Facebook Login Success', res);

        setUsername(res.name);
        setEmail(res.email);
    }

    return (
        <>
            <div>username : {username}</div>
            <div>email : {email}</div>

            <KakaoLogin
                jsKey={process.env.REACT_APP_KAKAO_JS_KEY}
                onSuccess={onKakaoSuccess}
                onFailure={(res) => console.log('failure', res)}
                getProfile={true}
            />

            <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_KEY}
                autoLoad={false}
                fields="name,first_name,last_name,email"
                callback={onFacebookSuccess}
            />
        </>
    )
}

export default Test;