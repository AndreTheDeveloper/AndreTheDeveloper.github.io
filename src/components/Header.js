import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './HeaderCSS.css'
import Button from './Buttons'

class Header extends Component {
    render() {
        return (
                <header className="Header">
                    <h1 className='mainTitle'>{this.props.title}</h1>
                    <Button />
                </header>
        );
    }
}

Header.protoTypes = {
    title: PropTypes.string
};

export default Header;