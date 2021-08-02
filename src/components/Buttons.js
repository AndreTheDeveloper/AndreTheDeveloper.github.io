import React, {Component} from 'react';
import './ButtonsCSS.css'
import {Link} from 'react-router-dom'


class Buttons extends Component {
    render() {
        return (
            <span>
                <Link to='home'>
                    <button>Home</button>
                </Link>
                <Link to='about'>
                    <button>About us</button>
                </Link>
                <a href='https://discord.gg/nJaPqRq'>
                    <button>Discord</button>
                </a>
                <Link to='events'>
                    <button>Scheduled Events</button>
                </Link>
                <Link to='contact'>
                    <button>Contact</button>
                </Link>
            </span>
        );
    }
}


export default Buttons;