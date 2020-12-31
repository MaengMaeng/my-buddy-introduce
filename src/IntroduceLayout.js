import React, { useState, useEffect } from "react";
import IntroduceRowInfo from './IntroduceRowInfo'
import {getDummyData} from './DummyData'
import './IntroduceLayout.css'

const IntroduceLayout = (props) => {

    const headerMeta = [
        "번호",
        "항목",
        "설명"
    ];

    const [userData, setUserData] = useState([getDummyData(1)]); 

    return (
        <>
        <h3>내친소</h3>
        <div>
            {userData.length !== 0 && (
            <table>
                <thead>
                <tr>
                   {headerMeta.map(i => <th>{i}</th> )}
                </tr>
                </thead>
                <tbody>
                {userData.map((d, i) => {
                    return (<IntroduceRowInfo key={i} data={d}/>);
                })}
                </tbody>
            </table>
            )}
        </div>
        </>
    );
}


export default IntroduceLayout;