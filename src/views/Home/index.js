import React from 'react';
import { BtnSelect } from 'components/SelectButtonStyle'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link style={{ textDecoration: 'none' }} to="/english"><BtnSelect>English</BtnSelect></Link>
            <Link style={{ textDecoration: 'none' }} to="/setting"><BtnSelect>Setting</BtnSelect></Link>
            {/* <BtnSelect>Learn Japanese</BtnSelect> */}
        </div>
    )
}

export default Home;