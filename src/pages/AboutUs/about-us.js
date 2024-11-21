import React from 'react';
import aboutUs from '../../PicesForPages/AboutUs.jpg';
import FreeConsultation from '../Form/FreeConsultation';

function AboutUs() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={aboutUs} alt='aboutUsImage' className='background-video aboutUsImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>About Us</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftContent'>At Ram Mortgage, LLC, we treat each customer as an individual, not a number. We don't place you into a loan profile formula created by the banking industry. We use "common sense" and will help you obtain the best loan possible. We represent a wide range of "A" rated lenders with first quality rates to private "hardship" lenders.</span>
                        <span className='purchaseBottomLeftContent'>We work with more than 100 investors. This allows us to get you the best rates on all types of loan programs including: 30yr mortgage, 20yr mortgage, 15yr mortgage, 10yr mortgage, 1yr ARMS, 3yr ARMS, 5yr ARMS, Conventional, Jumbo, Home Equity Lines, VA and Commercial. Whether your situation calls for Full Documents, No Documents, Non-Owner Occupied (Investor) or Multi-Family, we'll fit your needs!</span>

                        <br />
                        <br />
                        <br />
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

export default AboutUs;
