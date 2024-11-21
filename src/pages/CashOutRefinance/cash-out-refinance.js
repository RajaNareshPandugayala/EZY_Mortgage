import React from 'react';
import COR from '../../PicesForPages/CashOutRefinance.jpg';
import FreeConsultation from '../Form/FreeConsultation';

function CashOutRefinance() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={COR} alt='CORImage' className='background-video CORImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Cash Out Refinance</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftContent' style={{ color: "red" }}>Please note that by refinancing your existing loan, your total finance charges for the new loan may be higher over the life of the new loan.</span>
                        <span className='purchaseBottomLeftContent'>Please note that by refinancing your existing loan, your total finance charges for the new loan may be higher over the life of the new loan.</span>

                        <span className='purchaseBottomLeftHeader'>What are the benefits?</span>
                        <span className='purchaseBottomLeftContent'>By cashing out on your home, you can obtain cash on the value of your own home to pay off debts or upcoming expenses. The refinance transaction can also provide you with a better mortgage loan interest rate that will save on your monthly mortgage payments during the loan. And it's tax-deductible.</span>

                        <span className='purchaseBottomLeftHeader'>How can we help?</span>
                        <span className='purchaseBottomLeftContent'>If you are looking for this type of refinancing, Ram Mortgage, LLC can find a program suited to your financial needs. We offer cash-out programs for Owner-occupied homes and Non-owner occupied homes, with low, affordable rates.</span>

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

export default CashOutRefinance;
