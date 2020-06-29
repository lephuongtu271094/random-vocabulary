import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BackBtn = (props) => {
    const { path } = props;
    return (
        <div style={{
            position: 'absolute',
            top: '30px',
            left: '30px',
        }}>
            <Link to={path} style={{ color: '#fff', }}>
                <ArrowLeftOutlined style={{ fontSize: "30px" }} />
            </Link>
        </div>
    )
}

BackBtn.propTypes = {
    path: PropTypes.string.isRequired,
};

export default BackBtn;