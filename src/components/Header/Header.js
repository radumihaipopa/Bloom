import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import Logo from './Logo'

class Header extends React.Component {
    constructor() {
        super();
        this.state = { page: 'home' }
    }
    setUnderlineHandler = (page) => this.setState({ page });

    render() {
        return (
            <div className="container">
                <Logo setUnderline={(page) => this.setUnderlineHandler(page)} />
                <div className="header-container">
                    <Link to="/" onClick={() => this.setUnderlineHandler('home')}>
                        <span
                            className="header-option"
                            style={{ borderColor: this.state.page === 'home' ? 'steelblue' : null }}>
                            Acasă
                                </span>
                    </Link>
                    <Link to="/categories" onClick={() => this.setUnderlineHandler('categories')}>
                        <span
                            className="header-option"
                            style={{ borderColor: this.state.page === 'categories' ? 'steelblue' : null }}>
                            Categorii
                                </span>
                    </Link>
                    <Link to="/popular" onClick={() => this.setUnderlineHandler('popular')}>
                        <span
                            className="header-option"
                            style={{ borderColor: this.state.page === 'popular' ? 'steelblue' : null }}>
                            Populare
                                </span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;
