import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'
const logoUrl = require('../../icons/logo.PNG');

class Logo extends React.Component {
    render() {
        return (
            <div className="header-logo-container">
                <Link to='/' onClick={() => this.props.setUnderline('home')}>
                    <img className="header-logo" src={logoUrl} alt='header-logo' />
                </Link>
            </div>
        )
    }
};

export default Logo;