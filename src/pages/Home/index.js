import React, { useState, useEffect, useMemo } from 'react';
import PostImage01 from '../../PicesForPages/34336_fed_blog_post.jpg';
import PostImage02 from '../../PicesForPages/33606_thinking_about_refi.jpg';
import PostImage03 from '../../PicesForPages/32975_retiring_mortgage.jpg';
import house from '../../PicesForPages/house.png';
import calendar from '../../PicesForPages/calendar-5.png';
import smartphoneHand from '../../PicesForPages/smartphone-7.png';
import smartphoneVoice from '../../PicesForPages/smartphone-6.png';
import blankPhoto from '../../PicesForPages/blank.jpg';
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
            <div className='OurSatisfiedBoxParent'>
                <div className='OurSatisfiedBox'>
                    <span className='OurSatisfiedHeading'>Our Satisfied Clients</span>
                    <span className='OurSatisfiedContentBox'>
                        <span className='OurSatisfiedStars'><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></span>
                        <span className='OurSatisfiedContent'>Awesome! Our Funding experience with EZY Mortgage, LLC was beyond my expectations! As a first time home-owner everything was new to me. But they had amazing communications (even though I did most of it online). And I got a better rate than my bank quoted me!</span>
                        <span className='OurSatisfiedNameLocation'>
                            <span className='OurSatisfiedName'>- Jill and Andrew Miles</span>
                            <span className='OurSatisfiedLocation'>Charlotte, North Carolina</span>
                        </span>
                        {/* <span>dot</span> */}
                    </span>
                </div>
                <span className='OurSatisfiedArrows'>
                    <i class="ri-arrow-left-wide-fill OurSatisfiedLeftArrow"></i>
                    <i class="ri-arrow-right-wide-fill OurSatisfiedRightArrow"></i>
                </span>
            </div>
            <div className='latestBoxParent'>
                <div className='latestBox'>
                    <span className='latestHeading'>Latest Blog Posts</span>
                    <div className='latestContentBoxParent'>
                        <div className='latestContentBox latestContentBox01'>
                            <span className='latestContentBoxSpanImage'>
                                <img src={PostImage01} alt='PostImage01' className='latestContentBoxImage' />
                            </span>
                            <span className='latestContentBoxContentBox'>
                                <span className='latestContentBoxDate'>Oct 17, 2024</span>
                                <span className='latestContentBoxHeading'>How The Fed Affects Mortgage Rates</span>
                                <span className='latestContentBoxContent'>When it comes to mortgage rates, the Federal Reserve plays an influential but indirect role. The Fed doesn’t set mortgage rates directly, but its decisions around interest rates significantly impact the financial landscape,...</span>
                                <span className='latestContentBoxReadMore'>Read More <i class="ri-arrow-right-circle-line"></i></span>
                            </span>
                        </div>
                        <div className='latestContentBox'>
                            <span className='latestContentBoxSpanImage'>
                                <img src={PostImage02} alt='PostImage02' className='latestContentBoxImage' />
                            </span>
                            <span className='latestContentBoxContentBox'>
                                <span className='latestContentBoxDate'>Sep 12, 2024</span>
                                <span className='latestContentBoxHeading'>Thinking About Refinancing?</span>
                                <span className='latestContentBoxContent'>Mortgage rates have dropped once again, offering a unique opportunity for both homebuyers and current homeowners, with rates at their lowest rate in over 18 months. For homeowners, this may be the perfect time...</span>
                                <span className='latestContentBoxReadMore'>Read More <i class="ri-arrow-right-circle-line"></i></span>
                            </span>
                        </div>
                        <div className='latestContentBox'>
                            <span className='latestContentBoxSpanImage'>
                                <img src={PostImage03} alt='PostImage03' className='latestContentBoxImage' />
                            </span>
                            <span className='latestContentBoxContentBox'>
                                <span className='latestContentBoxDate'>Aug 15, 2024</span>
                                <span className='latestContentBoxHeading'>Retiring with a Mortgage: What You Need to Know</span>
                                <span className='latestContentBoxContent'>While it’s true that mortgage debt can feel like a burden in retirement, it’s important to remember that your home remains a valuable asset. According to a recent study from the Michigan Retirement and Disability Research...</span>
                                <span className='latestContentBoxReadMore'>Read More <i class="ri-arrow-right-circle-line"></i></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='purchasingBoxParent'>
                <div className='purchasingBox'>
                    <span className='purchasingHeading'>Purchasing</span>
                    <span className='purchasingContent'>We work conforming and non-conforming real estate loans.</span>
                    <span className='purchasingButton'>CLICK HERE FOR MORE</span>
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
            <div className='teamBoxParent'>
                <div className='teamBox'>
                    <span className='teamHeading'>Meet Our Team</span>
                    <span className='teamContent'>Our team at EZY Mortgage, LLC is fast, friendly, experienced and here to help you every step of the process!</span>
                    <div className='teamListBoxParent'>
                        <div className='teamListBox'>
                            <span className='teamListSpanImage'>
                                <img src={blankPhoto} alt='blankPhoto01' />
                            </span>
                            <span className='teamListNameOfficer'>
                                <span className='teamListName'>---- --------- -------</span>
                                <span className='teamListOfficer'>Loan Officer</span>
                            </span>
                        </div>
                        <div className='teamListBox'>
                            <span className='teamListSpanImage'>
                                <img src={blankPhoto} alt='blankPhoto02' />
                            </span>
                            <span className='teamListNameOfficer'>
                                <span className='teamListName'>----- -------</span>
                                <span className='teamListOfficer'>Loan Officer</span>
                            </span>
                        </div>
                        <div className='teamListBox'>
                            <span className='teamListSpanImage'>
                                <img src={blankPhoto} alt='blankPhoto03' />
                            </span>
                            <span className='teamListNameOfficer'>
                                <span className='teamListName'>---- ------- -----</span>
                                <span className='teamListOfficer'>Loan Officer</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='addressBoxParent'>
                <div className='addressBox'>
                    <div className='addressHeading'>The EZY Mortgage, LLC Address</div>
                    <div className='addressMapDetails'>
                        <iframe title="EZY Mortgage, LLC Office Location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13062.366941375181!2d-80.840049!3d35.066945000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569d1636d6aaab%3A0x3379bd4d9cbba6c5!2s3540%20Toringdon%20Way%20Suite%20200%2C%20Charlotte%2C%20NC%2028277!5e0!3m2!1sen!2sus!4v1729786536483!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <span className='addressDetails'>
                            <span className='addressDetailsTop'>
                                <span className='addressDetailsTopHeading'>Contact Us:</span>
                                <span>Email:sri@ezymtg.com</span>
                                <span>Phone: (513)-999-2324</span>
                                <span>Address: #### ----------- ---, ----- ###
                                    <br />--------- ,--
                                    <br />#####</span>
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
            </div> */}
            <div className='refinanceBoxParent'>
                <div className='refinanceBox'>
                    <div className='refinanceContentBox'>
                        <span className='refinanceContentBoxHeading'>Refinance</span>
                        <span className='refinanceContentBoxContent'>We can help you lock in a long term fixed rate and get out of your ARM.</span>
                        <span className='refinanceContentBoxButton'>CLICK HERE FOR MORE</span>
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
                    <span className='purchasingButton'>CLICK HERE FOR MORE</span>
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
            {/* <div className='calculateBoxParent'>
                <div className='calculateBox'>
                    <span className='calculateHeading'>Calculate Monthly Payment*</span>
                    <div className='calculateContentBox'>
                        <span>
                            <img src={calcSmall} alt='calcSmall' />
                        </span>
                        <form name="calcForm" class="pform novalidation"
                            data-widget-rates-calc="">
                            <table class="mpc table table-responsive" cellspacing="0" cellpadding="0"
                                border="0">
                                <thead>
                                    <tr class="ths">
                                        <th>Term</th>
                                        <th>Rate</th>
                                        <th>Apr</th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>30 Yr Fxd</td>
                                        <td>6.196%</td>
                                        <td>6.272%</td>
                                        <td class="result">
                                            <div id="result_0"></div>
                                            <input type="hidden" name="rateTerm_0" value="30" />
                                            <input type="hidden" name="rateType_0" value="1" />
                                            <input type="hidden" name="rate_0" value="6.196" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>30 Yr Fxd FHA</td>
                                        <td>5.458%</td>
                                        <td>6.551%</td>
                                        <td class="result">
                                            <div id="result_1"></div>
                                            <input type="hidden" name="rateTerm_1" value="30" />
                                            <input type="hidden" name="rateType_1" value="1" />
                                            <input type="hidden" name="rate_1" value="5.458" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>15 Yr Fxd</td>
                                        <td>5.521%</td>
                                        <td>5.649%</td>
                                        <td class="result">
                                            <div id="result_2"></div>
                                            <input type="hidden" name="rateTerm_2" value="15" />
                                            <input type="hidden" name="rateType_2" value="1" />
                                            <input type="hidden" name="rate_2" value="5.521" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="inputRow" colspan="4">
                                            <label for="loanAmt_rc">Loan Amount</label>
                                            <input type="text" class="form-control" id="loanAmt_rc"
                                                name="loanAmt" value="" />
                                            <a class="btn colored calculate submit button_subscribe"
                                                href="/">Calculate</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <input type="hidden" name="numRates" value="3" />
                        </form>

                        <span>*=This is only an estimate, provided for illustrative purposes only. Actual rates and payments may vary. It does not constitute a quote.</span>
                    </div>
                </div>
            </div> */}
        </div >
    );
};

export default Home;
