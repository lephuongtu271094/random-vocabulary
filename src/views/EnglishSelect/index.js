import React from 'react';
import { BtnSelect } from 'components/SelectButtonStyle'
import { BackBtn } from 'components';
import { Link } from 'react-router-dom';

const EnglishSelect = () => {
    return (
        <div>
            <BackBtn path="/" ></BackBtn>
            <Link style={{ textDecoration: 'none' }} to="/english/vocabulary"><BtnSelect>3000 Vocabulary</BtnSelect></Link>
            <Link style={{ textDecoration: 'none' }} to="/english/topic-vocabulary"><BtnSelect>3000 topic Vocabulary</BtnSelect></Link>
            <Link style={{ textDecoration: 'none' }} to="/english/irregular-verbs"><BtnSelect>360 Irregular Verbs</BtnSelect></Link>
            <Link style={{ textDecoration: 'none' }} to="/english/grammar"><BtnSelect>Grammar</BtnSelect></Link>
        </div>
    )
}

export default EnglishSelect;