import React from 'react';
import FHAFamily from '../../PicesForPages/FHA_family2.png';
import FreeConsultation from '../Form/FreeConsultation';

function FHA() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={FHAFamily} alt='FHAFamilyImage' className='background-video FHA_FamilyImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>FHA Loans</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftContent'>FHA loans have been helping people become homeowners since 1934.</span>
                        <span className='purchaseBottomLeftHeader'>Some benefits of FHA loans are:</span>
                        <ul className='purchaseBottomLeftUL paperworkBottomLeftUL'>
                            <li>Low down payments</li>
                            <li>Low closing costs</li>
                            <li>Easy credit qualifying</li>
                        </ul>
                        <span className='purchaseBottomLeftHeader'>What does FHA have for you?</span>
                        <span className='purchaseBottomLeftSubHeader'>Buying your first home?</span>
                        <span className='purchaseBottomLeftContent'>FHA might be just what you need. Your down payment can be as low as 3.5% of the purchase price, and most of your closing costs and fees can be included in the loan. Available on 1-4 unit properties.</span>

                        <span className='purchaseBottomLeftSubHeader'>Want a fixer-upper?</span>
                        <span className='purchaseBottomLeftContent'>FHA has a loan that allows you to buy a home, fix it up, and include all the costs in one loan. Or, if you own a home that you want to re-model or repair, you can refinance what you owe and add the cost of repairs - all in one loan.</span>

                        <span className='purchaseBottomLeftSubHeader'>Financial help for seniors</span>
                        <span className='purchaseBottomLeftContent'>Are you 62 or older? Do you live in your home? Do you own it outright or have a low loan balance? If you can answer "yes" to all of these questions, then the FHA Reverse Mortgage might be right for you. It lets you convert a portion of your equity into cash.</span>

                        <span className='purchaseBottomLeftSubHeader'>Want to make your home more energy efficient?</span>
                        <span className='purchaseBottomLeftContent'>You can include the costs of energy improvements into an FHA Energy-Efficient Mortgage.</span>

                        <span className='purchaseBottomLeftSubHeader'>How about manufactured housing and mobile homes?</span>
                        <span className='purchaseBottomLeftContent'>Yes, FHA has financing for mobile homes and factory-built housing. There are two loan products – one for those who own the land that the home is on and another for mobile homes that are - or will be - located in mobile home parks.</span>

                        <span className='purchaseBottomLeftHeader'>FHA loans have been helping people become homeowners since 1934. How do we do it?</span>
                        <span className='purchaseBottomLeftContent'>The Federal Housing Administration (FHA) - which is part of HUD - insures the loan, so your lender can offer you a better deal.</span>
                        <span className='purchaseBottomLeftContent'>FHA allows a buyer to purchase a home with as little as 3.5% down. They tend to be more lenient on areas such as credit, funds to close and co-borrowers.</span>
                        <span className='purchaseBottomLeftContent'>Most loans use a method of analyzing credit called credit scoring in the underwriting process. Studies have demonstrated a direct relationship between low credit scores and higher mortgage delinquency rates. As a result many lenders have established minimum credit scores at which they will accept loans. Unfortunately, a lack of credit, old delinquencies or incorrect information on the credit report can cause a low credit score. FHA does not have specific credit score requirements. Although a high credit score may assist in getting the mortgage approved, a low score is not automatically cause for denial. If the credit scores are low, then it is up to the borrower to demonstrate his/her ability and willingness to pay the loan back. This allows the borrower to explain the circumstances surrounding the credit difficulties and have that explanation considered in the underwriting process.</span>
                        <span className='purchaseBottomLeftContent'>The underwriter on an FHA loan will review the credit and payment history of a customer concentrating on the most recent 12 to 24 months. If the customer has had a good payment record over the past 12 to 24 months they can often get approved for a mortgage even when Conventional financing has turned them down. An experienced loan officer can help the customer clearly tell their story and will often make suggestions as to how to make the file more acceptable to FHA. Because of FHA's leniency, some borrowers with past credit problems elect to use FHA for loans when they have a substantial down payment rather than getting a higher interest rate conventional loan. FHA tends to be more flexible than Conventional financing in the money needed to purchase the home.</span>
                        <span className='purchaseBottomLeftContent'>In an FHA mortgage the customer must put at least 3.5% of the sales price into the transaction. Some of this money may be used for down payment and the rest for closing costs . Keep in mind, however,that the total cost to close on an FHA is commonly over the 3.5%. With the down payment, closing costs, money to establish escrows for taxes and insurance plus interest to finish out the month of closing, the total costs can be closer to 6 or 8% of the sales price.</span>
                        <span className='purchaseBottomLeftContent'>The interest rate that you select will also have a bearing on the total costs. If you select a lower rate so that you can reduce your payment, you may end up paying additional money towards "points". At the same time if you are comfortable with a slightly higher payment you may find a lender that is willing to reduce the costs to close in favor of a higher interest rate.</span>
                        <span className='purchaseBottomLeftContent'>FHA allows the borrower to get the funds necessary to close from several sources. They include such areas as personal savings, gifts, grants, loans from retirement accounts and seller contributions.</span>

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

export default FHA;
