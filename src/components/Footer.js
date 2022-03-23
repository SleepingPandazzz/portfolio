import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default class Footer extends Component {
    render() {
        return (
            <div style={{ background: 'rgba(0,0,0,0.9)', height: '30vh' }}>
                <div style={{ color: 'white', fontSize: '25px', textAlign: 'center', padding: '5vh' }}>
                    <a href="www.linkedin.com/in/tingting-he787s" style={{ color: 'white' }}>
                        <FontAwesomeIcon className="footer-icon-style" icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/SleepingPandazzz/" style={{ color: 'white' }}>
                        <FontAwesomeIcon className="footer-icon-style" icon={faGithub} />
                    </a>
                    <a href="tingtinghe787@gmail.com" style={{ color: 'white' }}>
                        <FontAwesomeIcon className="footer-icon-style" icon={faEnvelope} />
                    </a>
                </div>
            </div>
        );
    }
}