import React, { useState, useEffect, useMemo } from 'react';
import house from '../../PicesForPages/house.png';
import calendar from '../../PicesForPages/calendar-5.png';
import smartphoneHand from '../../PicesForPages/smartphone-7.png';
import smartphoneVoice from '../../PicesForPages/smartphone-6.png';
import officeWorkLaptop from '../../PicesForPages/loan-office-work-table.jpg';
import loseIcon from '../../PicesForPages/lose.png';
import coinHand from '../../PicesForPages/coinHand.png';
import piggyBank from '../../PicesForPages/piggy-bank.png';
import houseMoney from '../../PicesForPages/houseMoney.png';
import rollerStick from '../../PicesForPages/066-roller.png';
import CreditCard from '../../PicesForPages/cc.png';
import time2 from '../../PicesForPages/time2.png';
import payMoney from '../../PicesForPages/pay.png';
import thumbsUp from '../../PicesForPages/thumbsUp.png';
import news from '../../PicesForPages/news.jpg';
import MortgageCalculator from '../CalculatorAndChart/mortgageCalculator';
// import calcSmall from '../../PicesForPages/calc-small.jpg';
import ChatBotPurchase from '../Form/ChatBotPurchase';
import ChatBotRefinance from '../Form//ChatBotRefinance';
import HomePageMonthlyPayment from '../CalculatorAndChart/homePageMonthlyPayment';
import YourTeamMembers from '../StaffDetails/teamMembers';
import ClientReview from '../Client_Review/clientReview';
import BlogPostInAPage from '../blogPages/BlogPagePosts/blogPostInAPage';

import { Link } from 'react-router-dom'



function Home() {
    const texts = useMemo(() => [
        "Lower Your Payment",
        "Lower Your Rate",
        "Get Your First Home",
        "Get Your Dream Home",
        "Get Cash Out"
    ], []);

    const [currentText, setCurrentText] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [activeChatBot, setActiveChatBot] = useState(null); // null, "purchase", or "refinance"
    const typingSpeed = 100;
    const deletingSpeed = 50;

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[currentTextIndex];

            if (!isDeleting) {
                setCurrentText((prev) => fullText.substring(0, prev.length + 1));
                if (currentText === fullText) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                setCurrentText((prev) => fullText.substring(0, prev.length - 1));
                if (currentText === "") {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        };

        const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearInterval(typingInterval);
    }, [currentText, isDeleting, texts, currentTextIndex]);



    return (
        <div className='homeParent'>
            <div className='homePageFirstImage'></div>
            <div className='homeHelpYouBoxParent'>
                <div className='homeHelpYouBox'>
                    {activeChatBot === null && (
                        <>
                            <span className='homeHelpYouHeading'>
                                <span className='homeHelpYouHeadingLeft'>Let's Help You... </span>
                                <span className='homeHelpYouHeadingRight'>
                                    <span className="typingText">{currentText}</span>
                                </span>
                            </span>
                            <span className='homeHelpYouContent'>
                                Whatever your goals are, we are here to help! <br />Click our prequalifier to get started!
                            </span>
                            <span className='homeHelpYouButton'>
                                <button
                                    className='homeHelpYouButtonLeft'
                                    onClick={() => setActiveChatBot("purchase")}
                                >
                                    Purchase
                                </button>
                                <button
                                    className='homeHelpYouButtonRight'
                                    onClick={() => setActiveChatBot("refinance")}
                                >
                                    Refinance
                                </button>
                            </span>
                        </>
                    )}

                    {/* Conditional Rendering for ChatBotPurchase */}
                    {activeChatBot === "purchase" && (
                        <span className='homeHelpYouChatBot'>
                            <ChatBotPurchase />
                        </span>
                    )}

                    {/* Conditional Rendering for ChatBotRefinance */}
                    {activeChatBot === "refinance" && (
                        <span className='homeHelpYouChatBot'>
                            <ChatBotRefinance />
                        </span>
                    )}
                </div>
            </div>
            <div className='welcomeBoxParent'>
                <div className='welcomeBox'>
                    <span className='welcomeHeading'>Welcome To EZY Mortgage, LLC</span>
                    <span className='welcomeContent'>At EZY Mortgage, LLC, we treat each customer as an individual, not a number. We don't place you into a loan profile formula created by the banking industry. We use "common sense" and will help you obtain the best loan possible. We represent a wide range of "A" rated lenders with first quality rates to private "hardship" lenders.</span>
                    <span className='welcomeContent'>We work with more than 100 investors. This allows us to get you the best rates on all types of loan programs including: 30yr mortgage, 20yr mortgage, 15yr mortgage, 10yr mortgage, 1yr ARMS, 3yr ARMS, 5yr ARMS, Conventional, Jumbo, Home Equity Lines, VA and Commercial. Whether your situation calls for Full Documents, No Documents, Non-Owner Occupied (Investor) or Multi-Family, we'll fit your needs!</span>
                </div>
            </div>
            <ClientReview />

            <BlogPostInAPage />

            <div className='purchasingBoxParent'>
                <div className='purchasingBox'>
                    <span className='purchasingHeading'>Purchasing</span>
                    <span className='purchasingContent'>We work conforming and non-conforming real estate loans.</span>
                    <Link to="/purchase" className='purchasingBox_Link'><span className='purchasingButton'>CLICK HERE FOR MORE</span></Link>
                </div>
            </div>

            < MortgageCalculator />

            <div className='advantageBoxParent'>
                <div className='advantageBox'>
                    <div className='advantageHeading'>The EZY Mortgage, LLC Advantage</div>
                    <div className='advantageContentBoxParent'>
                        <span className='advantageContentBox'>
                            <span className='advantageContentBoxSpanImage'>
                                <img src={house} alt='house' />
                            </span>
                            <span className='advantageContentBoxHeading'>Local Knowledge</span>
                            <span className='advantageContentBoxContent'>We know the area and the market and we're part of your community, not a bot on the net :)</span>
                        </span>
                        <span className='advantageContentBox'>
                            <span className='advantageContentBoxSpanImage'>
                                <img src={calendar} alt='calender' />
                            </span>
                            <span className='advantageContentBoxHeading'>Fast Processing</span>
                            <span className='advantageContentBoxContent'>We work to close your loan as quickly as possible. We can even hit curveballs!</span>
                        </span>
                        <span className='advantageContentBox'>
                            <span className='advantageContentBoxSpanImage'>
                                <img src={smartphoneHand} alt='smartphoneHand' />
                            </span>
                            <span className='advantageContentBoxHeading'>Best Service</span>
                            <span className='advantageContentBoxContent'>We have the latest online tech like secure mobile uploading and we're available to use the device the old-fashioned way too!</span>
                        </span>
                        <span className='advantageContentBox'>
                            <span className='advantageContentBoxSpanImage'>
                                <img src={smartphoneVoice} alt='smartphoneVoice' />
                            </span>
                            <span className='advantageContentBoxHeading'>Utilizing Technology</span>
                            <span className='advantageContentBoxContent'>We have the latest online tech like secure mobile uploading and we're available to use the device the old-fashioned way too!</span>
                        </span>
                    </div>
                </div>
            </div>

            <YourTeamMembers />

            <div className='addressBoxParent'>
                <div className='addressBox'>
                    <div className='addressHeading'>The EZY Mortgage, LLC Address</div>
                    <div className='addressMapDetails'>
                        <iframe title="EZY Mortgage, LLC Office Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.835952668725!2d-84.31477000000001!3d39.31464189999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88405706534b6e95%3A0xe4a71b16e8b16681!2sBuilding%20100%2C%208581%20Mason%20Montgomery%20Rd%20%234%2C%20Mason%2C%20OH%2045040%2C%20USA!5e0!3m2!1sen!2sin!4v1733195800485!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <span className='addressDetails'>
                            <span className='addressDetailsTop'>
                                <span className='addressDetailsTopHeading'>Contact Us:</span>
                                <span>Email:sri@ezymtg.com</span>
                                <span>Phone: (513)-999-2324</span>
                                <span>Address: 8581 S Mason Montgomery Rd <br />Ste 4, Mason, OH <br />45040</span>
                            </span>
                            <span className='addressDetailsBottom'>
                                <span className='addressDetailsBottomHeading'>Office Hours:</span>
                                <span>Monday-Friday: 9am to 6pm</span>
                                <span>Saturday: 10am to 2pm</span>
                                <span>Sunday: Closed</span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className='refinanceBoxParent'>
                <div className='refinanceBox'>
                    <div className='refinanceContentBox'>
                        <span className='refinanceContentBoxHeading'>Refinance</span>
                        <span className='refinanceContentBoxContent'>We can help you lock in a long term fixed rate and get out of your ARM.</span>
                        <Link to="/refinancing" className='purchasingBox_Link'><span className='refinanceContentBoxButton'>CLICK HERE FOR MORE</span></Link>
                    </div>
                    <span className='refinanceSpanImage'>
                        <img src={officeWorkLaptop} alt='officeWorkLaptop' />
                    </span>
                </div>
            </div>
            <div className='reHistoricalBoxParent'>
                <div className='reHistoricalBox'>
                    <span className='reHistoricalHeading'>Refinance with Historically Low Rates!</span>
                    <div className='reHistoricalContentBoxParent'>
                        <div className='reHistoricalContentBox'>
                            <span className='reHistoricalContentBoxSpanImage'>
                                <img src={loseIcon} alt='loseIcon' />
                            </span>
                            <span className='reHistoricalContentBoxHeading'>Lower Monthly Payment</span>
                            <span className='reHistoricalContentBoxContent'>Take advantage of today's historically low rates, a lower payment can provide security in uncertain times.</span>
                            <b>Good For</b>
                            <span className='reHistoricalContentBoxBottomParent'>
                                <span className='reHistoricalContentBoxBottom'>
                                    <span className='reHistoricalContentBoxBottomSpanImage'>
                                        <img src={coinHand} alt='coinHand' />
                                    </span>
                                    <span className='reHistoricalContentBoxBottomText'>Extra Monthly Money</span>
                                </span>
                                <span className='reHistoricalContentBoxBottom'>
                                    <span className='reHistoricalContentBoxBottomSpanImage'>
                                        <img src={piggyBank} alt='piggyBank' />
                                    </span>
                                    <span className='reHistoricalContentBoxBottomText'>Retirement Savings!</span>
                                </span>
                            </span>
                            <span className='reHistoricalContentBoxButton'>Reduce My Payment</span>
                        </div>
                        <div className='reHistoricalContentBox'>
                            <span className='reHistoricalContentBoxSpanImage'>
                                <img src={houseMoney} alt='houseMoney' />
                            </span>
                            <span className='reHistoricalContentBoxHeading'>Get Cash Out</span>
                            <span className='reHistoricalContentBoxContent'>If your house has increased in value, you can use that equity to get cash-out, for whatever you need!</span>
                            <b>Good For</b>
                            <span className='reHistoricalContentBoxBottomParent'>
                                <span className='reHistoricalContentBoxBottom'>
                                    <span className='reHistoricalContentBoxBottomSpanImage'>
                                        <img src={rollerStick} alt='rollerStick' />
                                    </span>
                                    <span className='reHistoricalContentBoxBottomText'>Home Improvement</span>
                                </span>
                                <span className='reHistoricalContentBoxBottom'>
                                    <span className='reHistoricalContentBoxBottomSpanImage'>
                                        <img src={CreditCard} alt='CreditCard' />
                                    </span>
                                    <span className='reHistoricalContentBoxBottomText'>Paying high-interest debt</span>
                                </span>
                            </span>
                            <span className='reHistoricalContentBoxButton'>Use My Equity</span>
                        </div>
                        <div className='reHistoricalContentBox'>
                            <span className='reHistoricalContentBoxSpanImage'>
                                <img src={time2} alt='time2' />
                            </span>
                            <span className='reHistoricalContentBoxHeading'>Shorten Your Loan Term</span>
                            <span className='reHistoricalContentBoxContent'>Rates on 15 year mortgages can make the payment similar but the pay-off years sooner!</span>
                            <b>Good For</b>
                            <span className='reHistoricalContentBoxBottomParent'>
                                <span className='reHistoricalContentBoxBottom'>
                                    <span className='reHistoricalContentBoxBottomSpanImage'>
                                        <img src={payMoney} alt='payMoney' />
                                    </span>
                                    <span className='reHistoricalContentBoxBottomText'>Lower money towards interest</span>
                                </span>
                                <span className='reHistoricalContentBoxBottom'>
                                    <span className='reHistoricalContentBoxBottomSpanImage'>
                                        <img src={thumbsUp} alt='thumbsUp' />
                                    </span>
                                    <span className='reHistoricalContentBoxBottomText'>Paying off the home sooner!</span>
                                </span>
                            </span>
                            <span className='reHistoricalContentBoxButton'>Shorten My Team</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='purchasingBoxParent purchasingBoxParent00'>
                <div className='purchasingBox'>
                    <span className='purchasingHeading'>Apply Now</span>
                    <span className='purchasingContent'>Get started with our easy online application.</span>
                    <Link to="/purchase" className='purchasingBox_Link'><span className='purchasingButton'>CLICK HERE FOR MORE</span></Link>
                </div>
            </div>
            <div className='latestNewsBoxParent'>
                <div className='latestNewsBox'>
                    <span className='latestNewsSpanImage'>
                        <img src={news} alt='news' />
                    </span>
                    <div className='latestNewContentBox'>
                        <span className='latestNewHeading'>Latest News</span>
                        <span className='latestNewContent01'>
                            Eurozone Bond Investors Increasingly Focused on Public Finances Correction</span>
                        <span className='latestNewContent02'>Investors in eurozone government bonds have shifted their focus to public finances, Societe Generale said, adding the negative outlooks assigned by Moody’s on Belgium and by Fitch on France were a wake-up call.</span>
                    </div>
                </div>
            </div>
            <div className='purchasingBoxParent purchasingBoxParent01'>
                <div className='purchasingBox purchasingBox01'>
                    <ul>
                        <span className='purchasingHeading purchasingHeading01'>Learning Center</span>
                        <li>The loan process</li>
                        <li>How much can I afford?</li>
                        <li>Refinance analysis</li>
                        <li>What Will My Monthly Payment Be?</li>
                        <li>Mortgage Terms Explained</li>
                    </ul>
                    <div></div>
                </div>
            </div>
            <HomePageMonthlyPayment />
        </div >
    );
};

export default Home;
