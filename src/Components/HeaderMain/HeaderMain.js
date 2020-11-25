import React from 'react';
import './HeaderMain.css';
import headerMainImage from '../../Image/1.png';
import headerMainImage2 from '../../Image/2.png';

const HeaderMain = () => {
    return (
        <div className="header-main">
            <div className="header-main-left">
                <img className="img-fluid" src={headerMainImage} alt="" srcset="" />
            </div>
            <div className="header-main-right">
                <h5 className="font-weight-bold">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
                <ul className="font-weight-bold">
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>
                <img src={headerMainImage2} alt="" srcset="" />
                <h6>Government of India has awarded the <span className="font-weight-bold">"National Energy Conservation Award 2018".</span> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h6>
            </div>
        </div>
    );
};

export default HeaderMain;