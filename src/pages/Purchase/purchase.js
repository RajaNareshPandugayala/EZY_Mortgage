import React from 'react';
import KidsVideo from '../../PicesForPages/Kids_Playing_in_park2.mp4';
import FreeConsultation from '../Form/FreeConsultation';

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
                        <span className='purchaseBottomLeftContent'>If you're like most people, purchasing a home is probably one of the biggest investments you'll ever make in your lifetime. If you're considering buying a home, you're likely aware of the complexity of the endeavor. Because of the numerous factors to consider when purchasing a home, it's important to prepare as best you can. At Ram Mortgage, LLC, we are dedicated to finding the <span className='purchaseBottomLeftContentBold'>loan that fits your individual needs .</span></span>
                        <span className='purchaseBottomLeftHeader'>Getting Started</span>
                        <ul className='purchaseBottomLeftUL'>
                            <li>Rent Versus Buy Calculator<br /><span>Click Here to compare renting versus buying</span></li>
                            <li>Documents You Will Need<br /><span>Click Here to see what you'll need</span></li>
                            <li>Ready to Get Your Loan<br /><span>Click Here to Apply Now</span></li>
                        </ul>
                        <div className='purchaseBottomLeftButton'>
                            <span>APPLY NOW!</span>
                        </div>
                    </div>
                    <FreeConsultation />
                </div>
            </div>
        </div>
    );
}

export default purchase;
