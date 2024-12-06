import React from 'react'
import PostImage01 from '../../../PicesForPages/34336_fed_blog_post.jpg';
import PostImage02 from '../../../PicesForPages/33606_thinking_about_refi.jpg';
import PostImage03 from '../../../PicesForPages/32975_retiring_mortgage.jpg';
import PostImage04 from '../../../PicesForPages/34924_tapping_equity.jpg';
import PostImage05 from '../../../PicesForPages/34615_interest_rate_cuts.jpg';
import PostImage06 from '../../../PicesForPages/34567_refi15.jpg';

import { Link } from 'react-router-dom'



function BlogPostInAPage() {
    return (
        <div className='latestBoxParent'>
            <div className='latestBox'>
                <span className='latestHeading'>Latest Blog Posts</span>
                <div className='latestContentBoxParent'>
                    <div className='latestContentBox' style={{ display: "none" }}>
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
                    <div className='latestContentBox' style={{ display: "none" }}>
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
                    <div className='latestContentBox' style={{ display: "none" }}>
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
                    <div className='latestContentBox latestContentBox01'>
                        <span className='latestContentBoxSpanImage'>
                            <img src={PostImage04} alt='PostImage01' className='latestContentBoxImage' />
                        </span>
                        <span className='latestContentBoxContentBox'>
                            <span className='latestContentBoxDate'>Nov 25, 2024</span>
                            <span className='latestContentBoxHeading'>Tapping Your Equity After Rate Cuts</span>
                            <span className='latestContentBoxContent'>In today’s dynamic real estate market, homeowners are discovering new opportunities to leverage their home’s equity. With recent shifts in the economic landscape, many property owners are finding themselve...</span>
                            <Link to='/tapping_your_equity_after_rate_cuts' className='latestContentBoxContentBox_Link'>
                                <span className='latestContentBoxReadMore'>Read More <i class="ri-arrow-right-circle-line"></i></span>
                            </Link>
                        </span>
                    </div>
                    <div className='latestContentBox'>
                        <span className='latestContentBoxSpanImage'>
                            <img src={PostImage05} alt='PostImage02' className='latestContentBoxImage' />
                        </span>
                        <span className='latestContentBoxContentBox'>
                            <span className='latestContentBoxDate'>Nov 08, 2024</span>
                            <span className='latestContentBoxHeading'>Federal Reserve Rate Cuts</span>
                            <span className='latestContentBoxContent'>The Federal Reserve’s recent decision to cut interest rates has brought a sense of cautious optimism to the housing market and broader economy. On Thursday, the Fed reduced its key benchmark borrowing rate by a quarter...</span>
                            <Link to='/federal_reserve_rate_cuts' className='latestContentBoxContentBox_Link'>
                                <span className='latestContentBoxReadMore'>Read More <i class="ri-arrow-right-circle-line"></i></span>
                            </Link>
                        </span>
                    </div>
                    <div className='latestContentBox'>
                        <span className='latestContentBoxSpanImage'>
                            <img src={PostImage06} alt='PostImage03' className='latestContentBoxImage' />
                        </span>
                        <span className='latestContentBoxContentBox'>
                            <span className='latestContentBoxDate'>Nov 01, 2024</span>
                            <span className='latestContentBoxHeading'>Refi Into A 15 Year Mortgage?</span>
                            <span className='latestContentBoxContent'>Refinancing to a 15-year mortgage is an option many homeowners consider when interest rates drop. This type of refinance allows you to pay off your mortgage faster, potentially saving on long-term interest costs....</span>
                            <Link to='/refi_into_a_15_year_mortgage' className='latestContentBoxContentBox_Link'>
                                <span className='latestContentBoxReadMore'>Read More <i class="ri-arrow-right-circle-line"></i></span>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPostInAPage;
