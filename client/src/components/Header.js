import React, { Component } from 'react';
import { render } from 'react-dom';

class Header extends Component{
    render() {
        return (
            <nav>
                <div className="nav nav-wrapper">
                    <a className="left brand-logo">
                        Emaily
                    </a>
                    <ul className="right">
                        <li>Login with google</li>
                    </ul>
                </div>
            </nav>
            
        );
    }
}

export default Header;