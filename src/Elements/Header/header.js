import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../PicesForPages/logoClient-removebg-preview.png';

function Header() {
    return (
        <div className='headerParent'>
            <div className='headerBox'>
                <Link to="/" className='headerLogoDiv'>
                    <img src={Logo} alt='Logo' className='headerLogo' />
                </Link>
                <div className='headerMenu'>
                    <ul className='headerMenuUI'>
                        <span className='headerMenuUI_Header'>Purchase &#x025BF;</span>
                        <span className='headerMenuUI_LI'>
                            <li><Link to="/purchase">Purchase</Link></li>
                            <li><Link to="/paper-work">PaperWork Needed</Link></li>
                            <li><Link to="/how-much-can-i-afford-calculator">How Much Can I Afford?</Link></li>
                            {/* <li>How Much Can I Afford?</li> */}
                            <li><Link to="/what-will-my-monthly-payment-be-calculator">What Will My Monthly Payment Be</Link></li>
                            <li><Link to="/quick-quote">Quick Quote</Link></li>
                            <li><Link to='https://ezymtg.my1003app.com/'>Apply Now</Link></li>
                            <li><Link to="/fha">FHA Loans</Link></li>
                            <li><Link to="/va-loans">VA Loans</Link></li>
                        </span>
                    </ul>
                    <ul className='headerMenuUI'>
                        <span className='headerMenuUI_Header'>Refinance &#x025BF;</span>
                        <span className='headerMenuUI_LI'>
                            <li><Link to="/refinancing">Refinancing</Link></li>
                            <li><Link to="/cash-out-refinance">Cash Out Refinance</Link></li>
                            <li><Link to="/refinance-analysis-calculator">Refinance Analysis</Link></li>
                            <li><Link to="/quick-quote">Quick Quote</Link></li>
                            <li><Link to='https://ezymtg.my1003app.com/'>Apply Now</Link></li>
                            <li><Link to="/fha-va-streamline">FHA / VA Streamline Refinancing</Link></li>
                        </span>
                    </ul>
                    <ul className='headerMenuUI'>
                        <span className='headerMenuUI_Header'>Tools &#x025BF;</span>
                        <span className='headerMenuUI_LI'>
                            <li><Link to="/free-reports">Get Informative Free Reports</Link></li>
                            <li><Link to="/how-much-can-i-afford-calculator">How Much Can I Afford?</Link></li>
                            <li><Link to="/what-will-my-monthly-payment-be-calculator">What Will My Monthly Payment Be</Link></li>
                            <li><Link to="renting-versus-buying-calculator">Renting Versus Buying Calculator</Link></li>
                            <li><Link to="/refinance-analysis-calculator">Refinance Analysis Calculator</Link></li>
                            <li><Link to="/debt-consolidation-calculator">Consolidation Calculator</Link></li>
                            <li><Link to="/paper-work">PaperWork Needed</Link></li>
                            <li><Link to="/the-loan-process">The Loan Process</Link></li>
                            <li><Link to="/glossary-terms">Glossary of Mortgage Terms</Link></li>
                        </span>
                    </ul>
                    <ul className='headerMenuUI'>
                        <span className='headerMenuUI_Header'>Contact &#x025BF;</span>
                        <span className='headerMenuUI_LI'>
                            <li><Link to='https://ezymtg.my1003app.com/'>Apply Now</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/our-staff">Meet Our Team</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </span>
                    </ul>
                    <a href="tel:+1-513-999-2324" className="headerMenu_Tel"><i class="ri-phone-fill"></i> (513)-999-2324</a>
                    <button className='headerMenuButton'><Link to='https://ezymtg.my1003app.com/' className='headerMenuButtonLink'>Apply Now</Link></button>


                    {/* Deleted-Testing code for customr details are sent Gmail through FORM  */}
                    {/* <span className='headerMenuUI_Header'><Link to="/test-mail-through-form">TestMailThroughForm</Link></span> */}


                </div>
            </div>
        </div>
    )
}

export default Header;
