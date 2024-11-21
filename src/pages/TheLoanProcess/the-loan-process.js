import React from 'react';
import theLoanProcess from '../../PicesForPages/TheLoanProcess.jpg';
import FreeConsultation from '../Form/FreeConsultation';

function TheLoanProcess() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={theLoanProcess} alt='tlpImage' className='background-video theLoanProcessImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>The Loan Process</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftHeader'>Pre-qualification</span>
                        <span className='purchaseBottomLeftContent'>Pre-qualification occurs before the loan process actually begins. The lender gathers information about your income and debts, and makes a financial determination about how much house you may be able to afford.</span>
                        <span className='purchaseBottomLeftContent'>It's a good idea to know how expensive a home you can afford before you start shopping for one! If you are refinancing the loan on your existing home, then the pre-qualification process should help you decide whether refinancing is a good idea for you.</span>

                        <span className='purchaseBottomLeftHeader'>Application</span>
                        <span className='purchaseBottomLeftContent'>The application is the beginning of the loan process and either occurs after you have found a property you want to buy or have determined that you wish to refinance the loan on your existing home. You complete a mortgage application for a particular loan program and, supply all of the required documentation for processing. Various fees and down payment options are discussed at this time. The loan officer will deliver a Good Faith Estimate (GFE) and a Truth-In-Lending Disclosure (TIL) within three days that itemize the rates and estimated costs for obtaining the loan.</span>

                        <span className='purchaseBottomLeftHeader'>Processing of your Estimated Loan</span>
                        <span className='purchaseBottomLeftContent'>The lender will typically submit the application package to an automated underwriting system that will provide the lender with the necessary documentation needed for loan approval. In some cases, the lender may also manually underwrite an application package.</span>
                        <span className='purchaseBottomLeftContent'>The lender's processor reviews the credit reports and documentation to verify your employment, debts, and payment histories. If there are unacceptable late payments, collections, judgments, etc., the processor requests a written explanation from you. The processor also reviews the appraisal and survey and checks for property issues that may affect final loan approval. The processor's job is to put together an entire application package for the lender's underwriter.</span>

                        <span className='purchaseBottomLeftHeader'>Underwriting</span>
                        <span className='purchaseBottomLeftContent'>The lender's underwriter is responsible for determining whether the application package prepared by the processor meets all the lender's criteria. If more information is needed, the loan is put into "suspense" and you will be contacted to supply more documentation.</span>
                        <span className='purchaseBottomLeftContent'>If the underwriter approves the loan, the lender issues a conditional commitment to lend, orders title insurance, works with you to clear all conditions to its commitment to lend, and then schedules a closing time. Conditions to the lender's commitment may include issues with credit, income, or the property that may arise during the processing and underwriting process.</span>

                        <span className='purchaseBottomLeftHeader'>Closing</span>
                        <span className='purchaseBottomLeftContent'>The closing will occur after all conditions are cleared and the lender issues a full loan approval. At the closing, the lender "funds" the loan with a cashier's check, draft or wire to the closing agent, who disburses funds, in exchange for the title transfer to the property. This is the point at which you finish the loan process and actually refinance or buy the house, subject to the lender's loan. Closings occur at different places in different states. For instance, some states require that the closing take place at a closing attorney's office, while others use a title or escrow company. You may also be able to close at your home.</span>

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

export default TheLoanProcess;
