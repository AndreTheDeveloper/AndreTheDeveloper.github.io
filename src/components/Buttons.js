import React, {Component} from 'react';
import './ButtonsCSS.css'
import {Link} from 'react-router-dom'


class Buttons extends Component {
    render() {
        return (
            <span className="outer">
                <div className="inner">
                <Link to='home'>
                    <button>Home</button>
                </Link>
                </div>
                <div className="inner">
                <Link to='about'>
                    <button>About us</button>
                </Link>
                </div>
                <div className="inner">
                <a href='https://discord.gg/nJaPqRq'>
                    <button>Discord</button>
                </a>
                </div>
                <div className="inner">
                <Link to='events'>
                    <button>Scheduled Events</button>
                </Link>
                </div>
                <div className="inner">
                <Link to='contact'>
                    <button>Contact</button>
                </Link>
                </div>
            </span>
        );
    }
}


export default Buttons;