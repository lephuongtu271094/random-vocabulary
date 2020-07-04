import React from 'react';
import { BtnSelect } from 'components/SelectButtonStyle'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{height: "100vh"}}>
            <Link style={{ textDecoration: 'none' }} to="/english"><BtnSelect>English</BtnSelect></Link>
            <Link style={{ textDecoration: 'none' }} to="/setting"><BtnSelect>Setting</BtnSelect></Link>
        </div>
    )
}

export default Home;