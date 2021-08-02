import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './HeaderCSS.css'

class Header extends Component {
    render() {
        return (
                <header className="Header">
                    <h1>{this.props.title}</h1>
                    <button>About us</button>
                    <button>Discord</button>
                    <button>Scheduled Events</button>
                    <button>Contact</button>
                </header>
        );
    }
}

Header.protoTypes = {
    title: PropTypes.string
};

export default Header;