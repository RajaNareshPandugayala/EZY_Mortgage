import React from 'react'
import housingIcon from '../../PicesForPages/equal-housing-opportunity-logo-100-w.png'
import whatappIcon from '../../PicesForPages/WhatsappIcon.png'
import Logo from '../../PicesForPages/logoClient-removebg-preview.png'
import { Link } from 'react-router-dom'



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
                                <a href='https://maps.google.com/maps/dir//8581+Mason+Montgomery+Rd+%234+Building+100+Mason,+OH+45040+USA/@39.3146419,-84.31477,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88405706534b6e95:0xe4a71b16e8b16681' className='footerTopDivContentIcon'><i class="ri-map-pin-line"></i> <span>8581 S Mason Montgomery Rd Ste 4, Mason, OH 45040</span></a>
                                <a href="tel:+1-513-999-2324" className="aTag_Tel footerTopDivContentIcon"><i class="ri-phone-fill"></i> <span>(513)-999-2324</span></a>
                                <a href="mailto: sri@ezymtg.com" className="aTag_Mail footerTopDivContentIcon"><i class="ri-mail-send-fill"></i> <span>sri@ezymtg.com</span></a>
                            </span>
                        </span>
                    </div>
                    <div className='footerTopDiv'>
                        <span className='footerTopDivHeading'>Loan Options</span>
                        <span className='footerTopDivContent footerTopDivContent00'>
                            <Link to="/which-loan-is-right-for-me" className="LoanOption LoanOption01">Fixed Rate Mortgage</Link>
                            <Link to="/fha" className="LoanOption LoanOption02">FHA Home Loan</Link>
                            <Link to="/va-loans" className="LoanOption LoanOption03">VA Home Loan</Link>
                            <Link to="/which-loan-is-right-for-me" className="LoanOption LoanOption04">Jumbo Home Loan</Link>
                            <Link to="/which-loan-is-right-for-me" className="LoanOption LoanOption05">First Time Home Buyer</Link>
                            <Link to="/which-loan-is-right-for-me" className="LoanOption LoanOption06">Investment Property Loans</Link>
                            <Link to="/refinancing" className="LoanOption LoanOption07">Refinance</Link>
                        </span>
                    </div>
                    <div className='footerTopDiv'>
                        <span className='footerTopDivHeading'>Resources</span>
                        <span className='footerTopDivContent footerTopDivContent00'>
                            <Link to="/contact-us" className="Resource Resource01">Contact Us</Link>
                            <Link to="quick-quote" className="Resource Resource02">Get A Quote</Link>
                            <Link to='https://ezymtg.my1003app.com/' className="Resource Resource04">Apply Online</Link>
                            <Link to="/testimonials" className="Resource Resource05">Reviews</Link>
                            <Link to="https://www.nmlsconsumeraccess.org/" target='_blank' className="Resource Resource06">NMLS Consumer Access</Link>
                            <Link to="/ada-accessibility-statement" className="Resource Resource07">ADA Accessibility Statement</Link>
                            <Link to="/privacy-policy" className="Resource Resource03">Privacy Policy</Link>
                        </span>
                    </div>
                </div>
                <div className='footerMiddle'>
                    <img src={housingIcon} alt='houseIcon' className='houseIcon' /><b>Equal Housing Opportunity  </b><br />
                    <span> EZY Mortgage ™ YYYY </span> | <span>Company NMLS: 2546126</span>
                </div>
                <div className='footerBottom'>
                    <span>Licensed in OH State.</span>
                    <span className='footerBottomDown'>
                        <b>Mortgage Website Marketing</b>
                        <span className='footerBottomDown02'>This site is protected by reCAPTCHA and the Google <b>Privacy Policy</b> and <b>Terms of Service</b> apply.</span>
                    </span>
                </div>
                <div className='goTop' onClick={scrollToTop}>
                    <span>TOP</span>
                </div>
                <div className='WhatApp'>
                    <a href="https://wa.link/tn6193" target="_blank" rel="noopener noreferrer">
                        <img src={whatappIcon} alt='whatappIcon' className='whatappIcon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
