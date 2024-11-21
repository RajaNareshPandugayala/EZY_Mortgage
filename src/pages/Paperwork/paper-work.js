import React from 'react';
import PaperWorkNeeded from '../../PicesForPages/PaperWorkNeeded.png';
import FreeConsultation from '../Form/FreeConsultation';

function PaperWork() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={PaperWorkNeeded} alt='NewsPaperImage' className='background-video' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Paperwork Needed</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftContent'>To apply for a loan, you will have to provide the lender with detailed documentation of your financial history. The lender will request a credit report from a credit agency and will verify the information provided in your loan application. Be prepared to provide:</span>
                        <ul className='purchaseBottomLeftUL paperworkBottomLeftUL'>
                            <li>Social Security numbers for both you and any co-borrowers</li>
                            <li>Copies of checking and savings accounts statements for the past two months</li>
                            <li>Evidence of any other assets such as bonds, stocks, or money saved in retirement programs (i.e. 401k or 403b program)</li>
                            <li>Recent paycheck stubs</li>
                            <li>W-2 withholding forms, or income tax returns for the past two years to verify your income and proof of employment</li>
                            <li>The name and address of someone who can verify your employment</li>
                            <li>Residence history for the past two years</li>
                            <li>Sales contract for the purchase of a new home</li>
                            <li>Homeowner's association information with contact information if property is a condo or part of a homeowner's association</li>
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

export default PaperWork;
