import React from 'react'
import housingIcon from '../../PicesForPages/equal-housing-opportunity-logo-100-w.png'
import whatappIcon from '../../PicesForPages/WhatsappIcon.png'
import Logo from '../../PicesForPages/LogoEZYmtg.png'


function Footer() {
    // Scroll to the top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll
        });
    };
    return (
        <div className='footerParent'>
            <div className='footerBox'>
                <div className='footerTop'>
                    <div className='footerTopDiv footerTopDiv01'>
                        <span className='footerTopDivHeading'> <img src={Logo} alt='Logo' className='footerLogo' /> About Us</span>

                        {/* <span className='footerTopDivContent footerTopDivContent00'>We strive to deliver the highest <br />levels of service to help you <br />reach your goals. We thank you <br />for your trust and support. <br />From the first call to closing, <br />our team is with you every step <br />of the way!</span> */}
                        <span className='footerTopDivContent footerTopDivContent00'>We strive to deliver the highest levels of service to help you reach your goals. We thank you for your trust and support. From the first call to closing, our team is with you every step of the way!</span>
                    </div>
                    <div className='footerTopDiv footerTopDiv01'>
                        <span className='footerTopDiv footerTopDiv00'>
                            <span className='footerTopDivHeading'>Connect With Us</span>
                            <span className='footerTopDivContent footerTopDivContentSM'><i class="ri-facebook-box-fill"></i> <i class="ri-linkedin-box-fill"></i> <i class="ri-mail-fill"></i></span>
                        </span>
                        <span className='footerTopDiv footerTopDiv00 '>
                            <span className='footerTopDivHeading'>Contact Us</span>
                            <span className='footerTopDivContent footerTopDivContent00'>
                                <span className='footerTopDivContentIcon'><i class="ri-map-pin-line"></i> <span>#### --------- ---, -------- #### -------, -- #####</span></span>
                                <a href="tel:+1-980-342-5726" className="aTag_Tel footerTopDivContentIcon"><i class="ri-phone-fill"></i> <span>(513)-999-2324</span></a>
                                <a href="mailto: sri@ezymtg.com" className="aTag_Mail footerTopDivContentIcon"><i class="ri-mail-send-fill"></i> <span>sri@ezymtg.com</span></a>
                            </span>
                        </span>
                    </div>
                    <div className='footerTopDiv'>
                        <span className='footerTopDivHeading'>Loan Options</span>
                        <span className='footerTopDivContent footerTopDivContent00'>
                            <a href="/" className="LoanOption LoanOption01">Fixed Rate Mortgage</a>
                            <a href="/" className="LoanOption LoanOption02">FHA Home Loan</a>
                            <a href="/" className="LoanOption LoanOption03">VA Home Loan</a>
                            <a href="/" className="LoanOption LoanOption04">Jumbo Home Loan</a>
                            <a href="/" className="LoanOption LoanOption05">First Time Home Buyer</a>
                            <a href="/" className="LoanOption LoanOption06">Investment Property Loans</a>
                            <a href="/" className="LoanOption LoanOption07">Refinance</a>
                        </span>
                    </div>
                    <div className='footerTopDiv'>
                        <span className='footerTopDivHeading'>Resources</span>
                        <span className='footerTopDivContent footerTopDivContent00'>
                            <a href="/" className="Resource Resource01">Contact Us</a>
                            <a href="/" className="Resource Resource02">Get A Quote</a>
                            <a href="/" className="Resource Resource04">Apply Online</a>
                            <a href="/" className="Resource Resource05">Reviews</a>
                            <a href="/" className="Resource Resource06">NMLS Consumer Access</a>
                            <a href="/" className="Resource Resource07">ADA Accessibility Statement</a>
                            <a href="/" className="Resource Resource03">Privacy Policy</a>
                        </span>
                    </div>
                </div>
                <div className='footerMiddle'>
                    <img src={housingIcon} alt='houseIcon' className='houseIcon' /><b>Equal Housing Opportunity  </b><br />
                    <span> EZY Mortgage ™ YYYY </span> | <span>Company NMLS: #######</span>
                </div>
                <div className='footerBottom'>
                    <span>Licensed in States --, --, --, --, --, --, --, --, --, --, --, --, --, -- and --.</span>
                    <span className='footerBottomDown'>
                        <b>Mortgage Website Marketing</b>
                        <span className='footerBottomDown02'>This site is protected by reCAPTCHA and the Google <b>Privacy Policy</b> and <b>Terms of Service</b> apply.</span>
                    </span>
                </div>
                <div className='goTop' onClick={scrollToTop}>
                    <span>TOP</span>
                </div>
                <div className='WhatApp'>
                    <a href="https://wa.link/dbq5rc" target="_blank" rel="noopener noreferrer">
                        <img src={whatappIcon} alt='whatappIcon' className='whatappIcon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
