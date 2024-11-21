import React from 'react';
import VAFamily from '../../PicesForPages/VA_family.jpg';
import FreeConsultation from '../Form/FreeConsultation';

function VALoans() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={VAFamily} alt='FHAFamilyImage' className='background-video VA_FamilyImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>VA Loans</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftContent'>The VA mortgage loans are one of the best and safest methods to use when buying a home. Now even active duty personnel can qualify. If you are a Disabled Veteran, you may qualify for additional benefits on a VA home mortgage loan. The VA Home Mortgage Program does not limit the number of times a veteran may use the program.</span>
                        <span className='purchaseBottomLeftContent'>The VA mortgage loans extend to not only the Army, Navy, Air Force and Marines but also to Reservists and National Guardsmen.</span>
                        <span className='purchaseBottomLeftContent'>The Veterans Benefit Act, signed recently increased the VA loan limit to $510,400 for a loan with no money down. It also increased the eligibility for Veterans and active duty personnel and increased the benefits to Disabled Veterans.</span>

                        <span className='purchaseBottomLeftHeader'>Some of the benefits of the VA Mortgage Loan Program are:</span>
                        <ul className='purchaseBottomLeftUL paperworkBottomLeftUL'>
                            <li>The VA Mortgage Loans is guaranteed for no money down up to $510,400</li>
                            <li>No monthly Home Owner’s Insurance is required</li>
                            <li>Many VA Mortgage Loans are assumable</li>
                            <li>It is easier to qualify for a VA Loan than a conventional loan</li>
                            <li>VA Mortgage Loans can be refinanced</li>
                        </ul>

                        <span className='purchaseBottomLeftSubHeader'>No Money Down Up to $510,400</span>
                        <span className='purchaseBottomLeftContent'>You do not have to put any money down to qualify for a VA Home Mortgage Loan for up to $510,400. If the seller agrees to pay the closing costs, you may be able to purchase the home with no out of pocket costs. The loan and sales contract can be set up so that the VA Home Mortgage Loan cover 100% of the selling price and the seller covers the closing cost.</span>

                        <span className='purchaseBottomLeftSubHeader'>The VA Funding Fee</span>
                        <span className='purchaseBottomLeftContent'>The Veterans Administration assesses a Funding Fee to all VA loans between .5% and 3. In an FHA mortgage the customer must put at least 3.5% of the loan amount. The fee is added into the amount of the loan to be paid over the life of your VA home mortgage loan. The VA Funding Fee replaces the much higher priced Mortgage Insurance required when you get a conventional home loan. If you are a Disabled Veteran, you may qualify to get the fee waived completely.</span>

                        <span className='purchaseBottomLeftSubHeader'>Assumable VA Mortgage Loans</span>
                        <span className='purchaseBottomLeftContent'>VA loans are also assumable. If the person assuming the mortgage is a veteran with VA eligibility, the original veteran will not be giving up the amount of eligibility that they used to get the loan at the beginning. Veterans should use great care and closely investigate the terms of an assumption before allowing someone to assume their mortgage. It is too great a benefit to give up.</span>

                        <span className='purchaseBottomLeftSubHeader'>Qualifying for a VA Mortgage Loan</span>
                        <span className='purchaseBottomLeftContent'>The VA offers excellent qualifying standards. The VA does not use credit scoring in their analysis of the loan. Even if you have experienced some financial difficulties in your life that caused your scores to be low but have maintained a good payment record over the past year or so, you may qualify for a VA mortgage loan. This can be a tremendous savings compared to the cost of conventional loans when the borrower's credit scores are low.</span>

                        <span className='purchaseBottomLeftSubHeader'>VA Mortgage Loans may be refinanced</span>
                        <span className='purchaseBottomLeftContent'>VA mortgage loans have built in features allowing a loan to be refinanced to a lower interest rate without all of the criteria normally associated with a conventional loan. This is called an Interest Rate Reduction Loan; the veteran can secure a lower interest rate without any credit checks, appraisal, and income or asset verification and can roll the costs of the transaction into the loan so there are no out of pocket costs.</span>

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

export default VALoans;
