import React from 'react';
import RightLoan from '../../PicesForPages/WhichLoanisRightForYou.jpg';
import FreeConsultation from '../Form/FreeConsultation';

function RightLoanForYou() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={RightLoan} alt='RightLoanImage' className='background-video RightLoanImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Which Loan is Right For You?</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftContent'>In the past every home owner got the same loan: a 30 year fixed mortgage. Today there are many different loan programs and choosing the right one could save you hundreds of dollars on your monthly payments.</span>
                        <span className='purchaseBottomLeftContent'>
                            <span>
                                <b>How Long Do You Plan On Living In The House?</b>
                                <span>Not Very Long (1-3 Years)</span>
                                <span>A few years (3-5 Years)</span>
                                <span>At least 5 years (5-7 years)</span>
                                <span>Around 10 years ( 7-10 years)</span>
                                <span>A long time (10 plus years)</span>
                            </span>
                            <span>
                                <b>We Recommend:</b>
                                <span>3/1 ARM, 1 year ARM or 6 month ARM</span>
                                <span>5/1 ARM</span>
                                <span>7/1 ARM</span>
                                <span>10/1 ARM, 30 yr fixed or 15 yr fixed</span>
                                <span>30 year fixed or 15 year fixed</span>
                            </span>
                        </span>
                        <ul className='purchaseBottomLeftUL paperworkBottomLeftUL'>
                            <li>Low down payments</li>
                            <li>Low closing costs</li>
                            <li>Easy credit qualifying</li>
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

export default RightLoanForYou;
