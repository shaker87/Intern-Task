import React from 'react';
import './MiddleContent.css';
import middleContentImage from '../../Image/3.png';

const MiddleContent = () => {
    return (
        <div className="middleContent">
            <h6 className="pt-3 pb-3 font-weight-bold">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h6>
            <img className="img-fluid" src={middleContentImage} alt="" srcset="" />
            <p className="d-flex justify-content-center font-weight-bold">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            <hr style={{ background: 'red' }} />
            <h6 className="d-flex justify-content-center font-weight-bold">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
            <h6 className="text-center font-weight-bold">CHEMICALS & PROCESS<span style={{ color: 'red' }}> | </span>POWER<span style={{ color: 'red' }}> | </span> WATER & WASTE WATER<span style={{ color: 'red' }}> | </span>OILS & GAS<span style={{ color: 'red' }}> | </span>PHARMA<span style={{ color: 'red' }}> | </span>SUGARS & DISTILLERIES<span style={{ color: 'red' }}> | </span>PAPER & PULP<span style={{ color: 'red' }}> | </span>MARINE & DEFENCE<span style={{ color: 'red' }}> | </span>METAL & MINING<span style={{ color: 'red' }}> | </span>FOOD & BEVERAGE<span style={{ color: 'red' }}> | </span>PETROCHEMICAL & REFINERIES<span style={{ color: 'red' }}> | </span>SOLAR<span style={{ color: 'red' }}> | </span>BUILDING<span style={{ color: 'red' }}> | </span>HVAC<span style={{ color: 'red' }}> | </span>FIRE FIGHTING<span style={{ color: 'red' }}> | </span>AGRICULTURE & RESIDENTIAL</h6>
        </div>
    );
};

export default MiddleContent;