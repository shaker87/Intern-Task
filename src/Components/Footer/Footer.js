import React from 'react';
import './Footer.css';
import { faGlobe, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
                <p>Toll free <span className="highlights">1800 200 1234</span></p>
            </div>
            <div className="footer-content">
                <FontAwesomeIcon icon={faFacebook} className="icon1" />
                <p>www.facebook.com/cripumps</p>
            </div>
            <div className="footer-content">
                <FontAwesomeIcon icon={faGlobe} className="icon2" />
                <p>www.crigroups.com</p>

            </div>
        </div>
    );
};

export default Footer;