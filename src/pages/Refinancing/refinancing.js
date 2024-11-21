import React from 'react';
import RFamily from '../../PicesForPages/Refinancing_family.jpg';
import FreeConsultation from '../Form/FreeConsultation';

function Refinancing() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={RFamily} alt='RFamilyImage' className='background-video R_FamilyImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Refinancing</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftContent' style={{ color: "red" }}>Please note that by refinancing your existing loan, your total finance charges for the new loan may be higher over the life of the new loan.</span>
                        <span className='purchaseBottomLeftContent'>Refinancing is often used to lower your interest rate. If rates have dropped since you last financed your home, you may want to consider refinancing. Other common reasons to refinance include paying off a balloon payment, converting an adjustable rate loan to a fixed rate loan or to extract cash equity in your home (cash out). A few reasons for cashing out include: home improvement, an education fund, and consolidating debt.</span>
                        <span className='purchaseBottomLeftContent'>Another way to convert equity in your home to cash is a "home equity" loan. A "home equity" loan is an alternative to refinancing if your home loan has a very low rate compared to current interest rates or if you have a prepayment penalty on your loan.</span>

                        <span className='purchaseBottomLeftHeader'>Benefits:</span>
                        <ul className='purchaseBottomLeftUL paperworkBottomLeftUL'>
                            <li>Reduce Your Interest Rate</li>
                            <li>Cash Out Equity for Home Improvements</li>
                            <li>Consolidate Debt</li>
                            <li>Lower Monthly Payments</li>
                        </ul>

                        <span className='purchaseBottomLeftHeader'>To Refinance You'll Need:</span>
                        <ul className='purchaseBottomLeftUL paperworkBottomLeftUL'>
                            <li>Current Appraisal and Analysis</li>
                            <li>Verification of Assets and Income</li>
                            <li><span>Click Here to Apply Now</span></li>
                            <li><span>Click Here To See Paperwork Needed</span></li>
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

export default Refinancing;
