import React from 'react';
import KidsVideo from '../../PicesForPages/Kids_Playing_in_park2.mp4';
import FreeConsultation from '../Form/FreeConsultation';
import { Link } from 'react-router-dom'


function purchase() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                {/* Video element */}
                <video
                    className='background-video'
                    autoPlay
                    loop
                    muted
                >
                    <source src={KidsVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Purchase</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftContent'>If you're like most people, purchasing a home is probably one of the biggest investments you'll ever make in your lifetime. If you're considering buying a home, you're likely aware of the complexity of the endeavor. Because of the numerous factors to consider when purchasing a home, it's important to prepare as best you can. At EZY Mortgage, LLC, we are dedicated to finding the <span className='purchaseBottomLeftContentBold'>loan that fits your individual needs .</span></span>
                        <span className='purchaseBottomLeftHeader'>Getting Started</span>
                        <ul className='purchaseBottomLeftUL'>
                            <li>Rent Versus Buy Calculator<br />
                                <Link to="/renting-versus-buying-calculator" className='purchaseBottomLeftULLink'>Click Here to compare renting versus buying</Link>
                            </li>
                            <li>Documents You Will Need<br />
                                <Link to="/paper-work" className='purchaseBottomLeftULLink'>Click Here to see what you'll need</Link>
                            </li>
                            <li>Ready to Get Your Loan<br />
                                <Link to="https://ezymtg.my1003app.com" className='purchaseBottomLeftULLink'>
                                    Click Here to Apply Now
                                </Link>
                            </li>
                        </ul>
                        <div className='purchaseBottomLeftButton'>
                            <Link to='https://ezymtg.my1003app.com/' className='purchaseBottomLeftButtonLink'>Apply Now</Link>
                        </div>
                    </div>
                    <FreeConsultation />
                </div>
            </div>
        </div>
    );
}

export default purchase;
