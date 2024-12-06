import React, { useState } from 'react';
import COR from '../../PicesForPages/officermortgagePage.jpg';

import MortgageCalculator from '../CalculatorAndChart/mortgageCalculator';
import ClientReview from '../Client_Review/clientReview';
import BlogPostInAPage from '../blogPages/BlogPagePosts/blogPostInAPage';
import FreeQuoteForm from '../Form/FreeQuote';

import SriAnnapareddy from '../../PicesForPages/SriAnnapareddy.webp';
import blankPhoto from '../../PicesForPages/blank.jpg';

import { useParams } from 'react-router-dom';


function TeamMemberFullDetails() {
    const { id } = useParams();

    // Initialize the state before any condition
    const [isFreeQuoteVisible, setIsFreeQuoteVisible] = useState(false);

    const teamMembers = {
        'sri-annapareddy': {
            name: 'Sri Annapareddy',
            role: 'Sr. Loan Originator',
            photo: SriAnnapareddy,
            nmls: '2052589',
            address: '3540 Toringdon Way, Suite 200, \nCharlotte, NC 28277',
            contactPhone: '(980) 342-5726',
            contactWork: '(978) 729-7484',
            contactMail: 'anasuya.sunkara@ezymtg.com',
            yourService: `Whether you're buying, selling, refinancing, or building your dream home, you have a lot riding on your loan specialist. Since market conditions and mortgage programs change frequently, you need to make sure you're dealing with a top professional who is able to give you quick and accurate financial advice. As an experienced loan officer I have the knowledge and expertise you need to explore the many financing options available.\n\nEnsuring that you make the right choice for you and your family is my ultimate goal. And I am committed to providing my customers with mortgage services that exceed their expectations. I hope you'll browse my website, check out the different loan programs I have available, use my decision-making tools and calculators, and use our secure online application to get started.\n\nAfter you've applied, I'll call you to discuss the details of your loan, or you may choose to set up an appointment with me using my online form. As always, you may contact me anytime by phone, fax or email for personalized service and expert advice.\n\nI look forward to working with you.`,
        },
        '#': {
            name: 'Coming Soon',
            role: '---- ---------',
            photo: blankPhoto,
            nmls: '-------',
            address: '3540 Toringdon Way, Suite 200, \nCharlotte, NC 28277',
            contactPhone: '(111) 342-5726',
            contactWork: '(111) 729-7484',
            contactMail: 'jane.doe@ezymtg.com',
            yourService: `Whether you're buying, selling, refinancing, or building your dream home, you have a lot riding on your loan specialist. Since market conditions and mortgage programs change frequently, you need to make sure you're dealing with a top professional who is able to give you quick and accurate financial advice. As an experienced loan officer I have the knowledge and expertise you need to explore the many financing options available.\n\nEnsuring that you make the right choice for you and your family is my ultimate goal. And I am committed to providing my customers with mortgage services that exceed their expectations. I hope you'll browse my website, check out the different loan programs I have available, use my decision-making tools and calculators, and use our secure online application to get started.\n\nAfter you've applied, I'll call you to discuss the details of your loan, or you may choose to set up an appointment with me using my online form. As always, you may contact me anytime by phone, fax or email for personalized service and expert advice.\n\nI look forward to working with you.`,
        },
    };

    const member = teamMembers[id];

    if (!member) {
        return <div>Team Member not found</div>;
    }

    // Function to hide the FreeQuoteFormParent
    const hideFreeQuoteForm = () => {
        setIsFreeQuoteVisible(false);
    };

    // Function to handle clicks outside the FreeQuoteBox
    const handleOutsideClick = (event) => {
        if (event.target.classList.contains('FreeQuoteFormParent')) {
            hideFreeQuoteForm();
        }
    };

    return (
        <div className='purchaseParent ourTeamMemberParent'>
            <div className='ourTeamMemberTopParent'>
                <img src={COR} alt='CORImage' className='ourTeamMemberTopBGImage' />
                <div className='ourTeamMemberTopBox'>
                    <span className='ourTeamMemberTopLeftSide'>
                        <span className='ourTeamMemberTopLeftSideSpanImage'>
                            <img src={member.photo} alt={member.name} className='ourTeamMemberTopStaffImage' />
                        </span>
                        <span>
                            <span className='ourTeamMemberTopLeftSideName'>{member.name}</span><br />
                            <span className='ourTeamMemberTopLeftSideRole'>{member.role}</span><br />
                            <span className='ourTeamMemberTopLeftSideNMLS'>NMLS#: {member.nmls}</span><br />
                        </span>
                    </span>
                    <span className='ourTeamMemberTopRightSide'>
                        <span>
                            <b>Address:</b><br />
                            {member.address.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </span><br />
                        <span>
                            <b>Contact:</b><br />
                            <i class="ri-phone-fill"></i> {member.contactPhone}<br />
                            <i class="ri-smartphone-line"></i> {member.contactWork}<br />
                            <i class="ri-mail-send-fill"></i> {member.contactMail}<br />
                        </span>
                    </span>
                </div>
            </div>
            <div className='purchaseBottomParent ourTeamMemberBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <div className='purchaseBottomLeftButton'>
                            <a href='https://ezymtg.my1003app.com/' className='purchaseBottomLeftButtonLink'>Apply Now</a>
                            <span className='purchaseBottomLeftButtonLink00' onClick={(e) => { e.preventDefault(); setIsFreeQuoteVisible(true); }} >Free Quote</span>
                        </div>

                        <span className='purchaseBottomLeftHeader'>At Your Service</span>

                        <span className='purchaseBottomLeftContent'>
                            {member.yourService.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </span>

                    </div>
                </div>
            </div>
            <ClientReview />
            <MortgageCalculator />
            <BlogPostInAPage />
            <div className='addressBoxParent'>
                <div className='addressBox'>
                    <div className='addressHeading'>The EZY Mortgage, LLC Address</div>
                    <div className='addressMapDetails'>
                        <iframe title="EZY Mortgage, LLC Office Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.835952668725!2d-84.31477000000001!3d39.31464189999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88405706534b6e95%3A0xe4a71b16e8b16681!2sBuilding%20100%2C%208581%20Mason%20Montgomery%20Rd%20%234%2C%20Mason%2C%20OH%2045040%2C%20USA!5e0!3m2!1sen!2sin!4v1733195800485!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            {
                isFreeQuoteVisible && (
                    <div
                        className='FreeQuoteFormParent'
                        onClick={handleOutsideClick}
                    >
                        <div className='FreeQuoteFormBox'>
                            <FreeQuoteForm officerName={`${member.name} ${member.nmls}`} />
                            <span
                                className='FreeQuoteFormCloseButton'
                                onClick={hideFreeQuoteForm}
                            >
                                <span>X</span>
                            </span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TeamMemberFullDetails;
