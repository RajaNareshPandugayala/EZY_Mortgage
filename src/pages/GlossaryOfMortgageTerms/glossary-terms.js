import React, { useRef } from 'react';
import GlossaryTerms from '../../PicesForPages/GlossaryOfMortgageTerms.png';
import FreeConsultation from '../Form/FreeConsultation';

function GlossaryOfMortgageTerms() {
    // Create references for each alphabet section
    const sectionsRef = {
        A: useRef(null), B: useRef(null), C: useRef(null), D: useRef(null), E: useRef(null), F: useRef(null), G: useRef(null), H: useRef(null), I: useRef(null), J: useRef(null), K: useRef(null), L: useRef(null), M: useRef(null), N: useRef(null), O: useRef(null), P: useRef(null), Q: useRef(null), R: useRef(null), S: useRef(null), T: useRef(null), U: useRef(null), V: useRef(null), W: useRef(null), X: useRef(null), Y: useRef(null), Z: useRef(null),
    };

    // Scroll to the section corresponding to the clicked letter
    const scrollToSection = (letter) => {
        sectionsRef[letter].current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={GlossaryTerms} alt='GlossaryTermsImage' className='background-video GlossaryTermsImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Glossary Of Mortgage Terms</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContent'>Select the first letter of the word from the list below to jump to the appropriate section of the glossary.</span>

                        {/* Render individual <a> tags for each alphabet */}
                        <div>
                            {"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ").map((letter) => (
                                <button
                                    key={letter}
                                    onClick={() => scrollToSection(letter)}
                                    className='glossary-link'
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'red',
                                        cursor: 'pointer',
                                        textDecoration: 'underline',
                                        padding: '0',
                                    }}
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>

                        {/* Glossary Terms by Section */}
                        <span ref={sectionsRef.A}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- A -</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>abstract of title</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A historical summary provided by a title insurance company of all records affecting the title to a property</span>

                        <span id='adjustableRateMortgage' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>acceleration clause</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Allows a lender to declare the entire outstanding balance of a loan immediately due and payable should a borrower violate specific loan provisions or default on the loan.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>adjustable rate mortgage (ARM)</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A variable or flexible rate mortgage with an interest rate that varies according to the financial index it is based upon. To limit the borrower's risk, the ARM may have a payment or rate cap. See also: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#cap" style={{ color: "red", textDecoration: "none" }}>cap</a></span>.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>amenities</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Features of your home that fit your preferences and can increase the value of your property. Some examples include the number of bedrooms, bathrooms, or vicinity to public transportation.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>amortization</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The liquidation of a debt by regular, usually monthly, installments of principal and interest. An amortization schedule is a table showing the payment amount, interest, principal and unpaid balance for the entire term of the loan.</span>

                        <span id='AnnualPercentageRate' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>annual cap</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See:<span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#cap" style={{ color: "red", textDecoration: "none" }}>cap</a></span></span>

                        <span id='appraisal' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>annual percentage rate (A.P.R.)</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The actual interest rate, taking into account points and other finance charges, for the projected life of a mortgage. Disclosure of APR is required by the Truth-in-Lending Law and allows borrowers to compare the actual costs of different mortgage loans.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>appraisal</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>An estimate of a property's value as of a given date, determined by a qualified professional appraiser. The value may be based on replacement cost, the sales of comparable properties or the property's ability to produce income.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>appreciation</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A property's increase in value due to inflation or economic factors.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>assessment</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Charges levied against a property for tax purposes or to pay for municipality or association improvements such as curbs, sewers, or grounds maintenance.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>assignment</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The transfer of a contract or a right to buy property at given rates and terms from a mortgagee to another person.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>assumption</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>An agreement between a buyer and a seller, requiring lender approval, where the buyer takes over the payments for a mortgage and accepts the liability. Assuming a loan can be advantageous for a buyer because there are no closing costs and the loan's interest rate may be lower than current market rates. Depending on what is in the mortgage or deed of trust, the lender may raise the interest rate, require the buyer to qualify for the mortgage, or not permit the buyer to assume the loan at all.</span>


                        <span ref={sectionsRef.B}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- B -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>balloon mortgage</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Mortgage with a final lump sum payment that is greater than preceding payments and pays the loan in full.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>biweekly mortgage</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A loan requiring payments of principal and interest at two-week intervals. This type of loan amortizes much faster than monthly payment loans. The payment for a biweekly mortgage is half what a monthly payment would be.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>bond</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A certificate serving as security for payment of a debt. Bonds backed by mortgage loans are pooled together and sold in the <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#secondaryMarket" style={{ color: "red", textDecoration: "none" }}>secondary market.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>bridge loan</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A loan to "bridge" the gap between the termination of one mortgage and the beginning of another, such as when a borrower purchases a new home before receiving cash proceeds from the sale of a prior home. Also known as a swing loan.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>broker</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>An intermediary between the borrower and the lender. The broker represents the borrower to get the best deal.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>buy-down</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Where the buyer pays additional discount points or makes a substantial down payment in return for a below market interest rate; or the seller offers 3-2-1 interest payment plans or pays closing costs such as the origination fee. During times of high interest rates, buy-downs may induce buyers to purchase property they may not otherwise have purchased.
                        </span>


                        <span id='cap' style={{ marginTop: "-25px" }}></span>
                        <span ref={sectionsRef.C}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- C -</span>

                        <span id='certificateOfReasonableValue' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>cap</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A limit in how much an adjustable rate mortgage's monthly payment or interest rate can increase. A cap is meant to protect the borrower from large increases and may be a <b>payment cap</b>, an interest cap, a life-of-loan cap or an annual cap. A payment cap is a limit on the monthly payment. An <b>interest cap</b> is a limit on the amount of the interest rate. A <b>life-of-loan cap</b> restricts the amount the interest rate can increase over the entire term of the loan. An <b>annual cap</b> limits the amount the interest rate can increase over a twelve-month period.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>certificate of reasonable value (CRV)</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A Veteran's Administration appraisal that establishes the maximum VA mortgage loan amount for a specified property.</span>

                        <span id='closedEndMortgage' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>certificate of title</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Document rendering an opinion on the status of a property's title based on public records.</span>

                        <span id='ClosingCosts' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>closed-end mortgage</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A mortgage principal amount that is fixed and cannot be increased during the life of the loan. See also: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#openEndMortgage" style={{ color: "red", textDecoration: "none" }}>open-end mortgage.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>closing costs</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Costs payable by both seller and buyer at the time of settlement, when the purchase of a property is finalized. These costs can be up to ten percent of the mortgage amount and usually include but are not limited to the following:</span>

                        <span className='purchaseBottomLeftContent '>Fees Paid to the Lender</span>
                        <ul className='purchaseBottomLeftUL paperworkBottomLeftUL purchaseBottomLeftContentmarginTop'>
                            <li>Origination fee</li>
                            <li>Discount points</li>
                            <li>Credit report fee</li>
                            <li>Appraisal fee</li>
                            <li>Assumption fee if loan is assumed</li>
                        </ul>

                        <span className='purchaseBottomLeftContent '>Fees Paid in Advance</span>
                        <ul className='purchaseBottomLeftUL paperworkBottomLeftUL purchaseBottomLeftContentmarginTop'>
                            <li>Interest from the closing date to the beginning of the 1st payment</li>
                            <li>Hazard insurance premium</li>
                            <li>Mortgage insurance premium</li>
                        </ul>

                        <span className='purchaseBottomLeftContent '>Other Charges</span>
                        <ul className='purchaseBottomLeftUL paperworkBottomLeftUL purchaseBottomLeftContentmarginTop'>
                            <li>Title search and title insurance</li>
                            <li>Sales commissions</li>
                            <li>Legal and recording fees</li>
                            <li>Inspection and survey fees</li>
                            <li>Property taxes and other adjustments</li>
                            <li>Processing and document preparation fees</li>
                        </ul>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>cloud</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A claim to the title of a property that, if valid, would prevent a purchaser from obtaining a clear title.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>collateral</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Something of value pledged as security for a loan. In mortgage lending, the property itself serves as collateral for a mortgage loan.</span>

                        <span id='coMortgagor' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>commitment fee</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A fee charged when an agreement is reached between a lender and a borrower for a loan at a specific rate and points and the lender guarantees to lock in that rate.</span>

                        <span id='conformingLoan' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>co-mortgagor</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>One who is individually and jointly obligated to repay a mortgage loan and shares ownership of the property with one or more borrowers. See also: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#coSigner" style={{ color: "red", textDecoration: "none" }}>co-signer.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>conforming loan</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A loan that conforms to Federal National Mortgage Association (FNMA) or Federal Home Loan Mortgage Corporation (FHLMC) guidelines.
                            See also: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#nonConformingLoan" style={{ color: "red", textDecoration: "none" }}>non-conforming loan.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>construction loan</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A short-term loan financing improvements to real estate, such as the building of a new home. The lender advances funds to the borrower as needed while construction progresses. Upon completion of the construction, the borrower must obtain permanent financing or pay the construction loan in full.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>consumer <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>handbook on adjustable rate mortgages (C.H.A.R.M.)</span></span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A disclosure required by the federal government to be given to any borrower applying for an adjustable rate mortgage (ARM).</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>conventional loan</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A mortgage loan that is not insured, guaranteed or funded by the Veterans Administration (VA), the Federal Housing Administration (FHA) or Rural Economic Community Development (RECD) (formerly Farmers Home Administration).</span>

                        <span id='coSigner' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>convertible mortgage</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>An adjustable rate mortgage (ARM) that allows a borrower to switch to a fixed-rate mortgage at a specified point in the loan term.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>co-signer</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>One who is obligated to repay a mortgage loan should the borrower default but who does not share ownership in the property. See also: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#coMortgagor" style={{ color: "red", textDecoration: "none" }}>co-mortgagor.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>covenants</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Rules and restrictions governing the use of property.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>CRV</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#certificateOfReasonableValue" style={{ color: "red", textDecoration: "none" }}>certificate of reasonable value.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>curtailments</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The borrower's privilege to make payments on a loan's principal before they are due. Paying off a mortgage before it is due may incur a penalty if so specified in the mortgage's prepayment clause.</span>

                        <span id='debtToIncomeRatio' style={{ marginTop: "-25px" }}></span>
                        <span ref={sectionsRef.D}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- D -</span>

                        <span id='deedOfTrust' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>debt-to-income ratio</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The ratio between a borrower's monthly payment obligations divided by his or her net effective income (FHA or VA loans) or gross monthly income (conventional loans).</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>deed of trust</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A document, used in many states in place of a <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#mortgage01" style={{ color: "red", textDecoration: "none" }}>mortgage</a></span>, held by a trustee pending repayment of the loan. The advantage of a deed of trust is that the trustee does not have to go to court to proceed with foreclosure should the borrower default on the loan.</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Department<span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'> of Housing and Urban Development (HUD)</span></span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The U.S. government agency that administers FHA, GNMA and other housing programs.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>discount points</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Amounts paid to the lender based on the loan amount to buy the interest rate down. Each point is one percent of the loan amount; for example, two points on a $100,000 mortgage is $2,000.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>down payment</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The difference between the purchase price and mortgage amount. The down payment becomes the property equity. Typically it should be cash savings, but it can also be a gift that is not to be repaid or a borrowed amount secured by assets.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>due-on-sale</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A clause in a mortgage or deed of trust allowing a lender to require immediate payment of the balance of the loan if the property is sold (subject to the terms of the security instrument).</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>duplex</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Dwelling divided into two units. </span>


                        <span ref={sectionsRef.E}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- E -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>earnest money</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Deposit in the form of cash or a note, given to a seller by a buyer as good faith assurance that the buyer intends to go through with the purchase of a property.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>easement</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The right one party has in regard to the property of another, such as the right of a public utility company to lay lines.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Equal Credit Opportunity Act</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A federal law prohibiting lenders and other creditors from discrimination based on race, color, sex, religion, national origin, age, marital status, receipt of public assistance or because an applicant has exercised his or her rights under the Consumer Credit Protection Act.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>equity</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The value of a property beyond any <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#lien" style={{ color: "red", textDecoration: "none" }}>liens</a></span> against it. Also referred to as owner's interest.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>escape clause</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A provision allowing one party or more to cancel all or part of the contract if certain events fail to happen, such as the ability of the buyer to obtain financing within a specified period.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>escrow</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Money placed with a third party for safekeeping either for final closing on a property or for payment of taxes and insurance throughout the year.</span>


                        <span ref={sectionsRef.F}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- F -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>fair market value</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The price a property can realistically sell for, based upon comparable selling prices of other properties in the same area.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Fannie Mae</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Nickname for <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#FNMA01" style={{ color: "red", textDecoration: "none" }}>Federal National Mortgage Association (FNMA).</a></span></span>

                        <span id='FNMA02' style={{ marginTop: "-25px" }}></span>
                        <span id='FHA' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Federal Home <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Loan Mortgage Corporation (FHLMC or Freddie Mac)</span></span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A quasi-governmental, federally-sponsored organization that acts as a <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#secondaryMarket" style={{ color: "red", textDecoration: "none" }}>secondary market</a></span>nvestor to buy and sell mortgage loans. FHLMC sets many of the guidelines for conventional mortgage loans, as does FNMA.</span>

                        <span id='FNMA01' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Federal Housing<span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Administration (FHA)</span></span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>An agency within the Department of Housing and Urban Development that sets standards for underwriting and insures residential mortgage loans made by private lenders. One of FHA's objectives is to ensure affordable mortgages to those with low or moderate income. FHA loans may be high loan-to-value, and they are limited by loan amount. FHA mortgage insurance requires a fee of 1.5 percent of the loan amount to be paid at closing, as well as an annual fee of 0.5 percent of the loan amount added to each monthly payment.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Federal<span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>National Mortgage Association (FNMA or Fannie Mae)</span></span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A private corporation that acts as a <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#secondaryMarket" style={{ color: "red", textDecoration: "none" }}>secondary market</a></span> investor to buy and sell mortgage loans. FNMA sets many of the guidelines for conventional mortgage loans, as does FHLMC. The major purpose of this organization is to make mortgage money more affordable and more available.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>fee simple</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The maximum form of ownership, with the right to occupy a property and sell it to a buyer at any time. Upon the death of the owner, the property goes to the owner's designated heirs. Also known as <b>fee absolute.</b></span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>FHA</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#FHA" style={{ color: "red", textDecoration: "none" }}>Federal Housing Administration.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>fifteen-year mortgage</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A loan with a term of 15 years. Although the monthly payment on a 15-year mortgage is higher than that of a 30-year mortgage, the amount of interest paid over the life of the loan is substantially less.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>fixed-rate mortgage</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A mortgage whose rate remains constant throughout the life of the mortgage.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>flood insurance</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The Federal Flood Disaster Protection Act of 1973 requires that federally-regulated lenders determine if real estate to be used to secure a loan is located in a Specially Flood Hazard Area (SFHA). If the property is located in a SFHA area, the borrower must obtain and maintain flood insurance on the property. Most insurance agents can assist in obtaining flood insurance.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>FNMA</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#FNMA01" style={{ color: "red", textDecoration: "none" }}>Federal National Mortgage Association.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Freddie Mac</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#FNMA02" style={{ color: "red", textDecoration: "none" }}>Federal Home Loan Mortgage Corporation (FHLMC).</a></span></span>


                        <span ref={sectionsRef.G}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- G -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>gift</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>This includes amounts from a relative or a grant from the borrower's employer, a municipality, non-profit religious organization, or non-profit community organization that does not have to be repaid.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Ginnie Mae</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Nickname for <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#GNMA" style={{ color: "red", textDecoration: "none" }}>Government National Mortgage Association (GNMA).</a></span></span>

                        <span id='GNMA' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>good faith estimate</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Estimate on closing costs and monthly mortgage payments provided by the lender to the homebuyer within 3 days of applying for a loan.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Government<span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>National Mortgage Association (GNMA or Ginnie Mae)</span></span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A government organization that participates in the <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#secondaryMarket" style={{ color: "red", textDecoration: "none" }}>secondary market</a>,</span> securitizing pools of FHA, VA, and RHS loans.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>graduated payment mortgage (GPM)</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A fixed-interest loan with lower payments in the early years than the later years. The amount of the payment gradually increases over a period of time and then levels off at a payment sufficient to pay off the loan over the remaining amortization period.</span>


                        <span ref={sectionsRef.H}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- H -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>hazard insurance</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A form of insurance that protects the insured property against physical damage such as fire and tornadoes. Mortgage lenders often require a borrower to maintain an amount of hazard insurance on the property that is equal at least to the amount of the mortgage loan.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>home equity loan</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A mortgage on the borrower's principal residence, usually for the purpose of making home improvements or debt consolidation.</span>

                        <span id='homeownersInsurance' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>home inspection</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A thorough review of the physical aspects and condition of a home by a professional home inspector. This inspection should be completed prior to closing so that any repairs or changes can be completed before the home is sold.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>homeowners insurance</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A form of insurance that protects the insured property against loss from theft, liability and most common disasters.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Housing<span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'> and Urban Development (HUD)</span></span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The U.S. government agency that administers FHA, GNMA and other housing programs.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>housing affordability index</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Indicates what proportion of homebuyers can afford to buy an average-priced home in specified areas. The most well known housing affordability index is published by the National Association of Realtors.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>housing expenses-to-income ratio</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#debtToIncomeRatio" style={{ color: "red", textDecoration: "none" }}>debt-to-income ratio.</a></span></span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>HUD</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'>Housing and Urban Development.</span></span>


                        <span ref={sectionsRef.I}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- I -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>income approach to value</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A method used by real estate appraisers to predict a property's anticipated future income. Income property includes shopping centers, hotels, motels, restaurants, apartment buildings, office space and so forth.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>income-to-debt ratio</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#debtToIncomeRatio" style={{ color: "red", textDecoration: "none" }}>debt-to-income ratio.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>index</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A published interest rate compiled from other indicators such as U.S. Treasury bills or the monthly average interest rate on loans closed by savings and loan organizations. Mortgage lenders use the index figure to establish rates on adjustable rate mortgages (ARMs).</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>insurance</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>As a part of PITI, the amount of the monthly mortgage payment that does not include the principal, interest, and taxes.<br />
                            Also see: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#homeownersInsurance" style={{ color: "red", textDecoration: "none" }}>homeowners insurance.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>interest</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The amount of the entire mortgage loan which does not include the principal.  Also, as a part of PITI, the amount of the monthly mortgage payment which does not include the principal, taxes, and insurance.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>interest cap</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#cap" style={{ color: "red", textDecoration: "none" }}>cap</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>interest rate</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The simple interest rate, stated as a percentage, charged by a lender on the principal amount of borrowed money. See also: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#AnnualPercentageRate" style={{ color: "red", textDecoration: "none" }}>Annual Percentage Rate.</a></span></span>



                        <span ref={sectionsRef.J}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- J -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>joint tenancy</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#Tenancy" style={{ color: "red", textDecoration: "none" }}>tenancy.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>jumbo loan</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A nonconforming loan that is larger than the limits set by the Federal National Mortgage Association (FNMA) or Federal Home Loan Mortgage Corporation (FHLMC) guidelines.</span>


                        <span ref={sectionsRef.K}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- K -</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>key lot</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Real estate deemed highly valuable because of its location.</span>

                        <span id='lien' style={{ marginTop: "-25px" }}></span>
                        <span ref={sectionsRef.L}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- L -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>lien</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A claim against a property for the payment of a debt. A mortgage is a lien; other types of liens a property might have include a tax lien for overdue taxes or a mechanics lien for unpaid debt to a subcontractor.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>life-of-loan cap</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#cap" style={{ color: "red", textDecoration: "none" }}>cap</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>liquidity</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The capability of an asset to be readily converted into cash.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>loan discount</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#Points" style={{ color: "red", textDecoration: "none" }}>points.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>loan origination fee</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#originationFee" style={{ color: "red", textDecoration: "none" }}>origination fee.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>loan-to-value ratio (LTV)</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The relationship, expressed as a percentage, between the amount of the proposed loan and a property's appraised value. For example, a $75,000 loan on a property appraised at $100,000 is a 75% loan-to-value.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>lock-in</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The guarantee of a specific interest rate and/or points for a specific period of time. Some lenders will charge a fee for locking in an interest rate. </span>


                        <span ref={sectionsRef.M}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- M -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>maintenance costs</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The cost of the upkeep of the house. These costs may be minor in cost and nature (replacing washers in the faucets) or major in cost and nature (new heating system or a new roof) and can apply to either the interior or exterior of the house.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>title</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>property</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>margin</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The amount a lender adds to the index of an adjustable rate mortgage to establish an adjusted interest rate. For example, a margin of 1.50 added to a 7 percent index establishes an adjusted interest rate of 8.50 percent.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>market value</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The price a property can realistically sell for, based upon comparable selling prices of other properties in the same area.</span>

                        <span id='mortgage01' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>modification</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A change in the terms of the mortgage note, such as a reduction in the interest rate or change in maturity date.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>mortgage</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A legal instrument in which property serves as security for the repayment of a loan. In some states, a <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#deedOfTrust" style={{ color: "red", textDecoration: "none" }}>deed of trust</a></span> is used rather than a mortgage.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>mortgage banker</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A lender that originates, closes, services and sells mortgage loans to the <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#secondaryMarket" style={{ color: "red", textDecoration: "none" }}>secondary market.</a></span></span>

                        <span id='MortgageInsurance' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>mortgage broker</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>An intermediary between a borrower and a lender. A broker's expertise is to help borrowers find financing that they might not otherwise find themselves.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>mortgage insurance</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Money paid to insure the lender against loss due to foreclosure or loan default. Mortgage insurance is required on conventional loans with less than a 20 percent down payment. FHA mortgage insurance requires a payment of 1.5 percent of the loan amount to be paid at closing, as well as an annual fee of 0.5 percent of the loan amount added to each monthly payment.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>mortgage interest</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Interest rate charge for borrowing the money for the mortgage. It is a used to calculate the interest payment on the mortgage each month.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>mortgage term</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The length of time that a mortgage is scheduled to exist. Example: a 30-year mortgage term is for 30 years.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>mortgage</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The lender.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>mortgagor</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The borrower.
                        </span>


                        <span ref={sectionsRef.N}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- N -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>negative amortization</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A situation in which a borrower is paying less interest than what is actually being charged for a mortgage loan. The unpaid interest is added to the loan's principal. The borrower may end up owing more than the original amount of the mortgage.</span>

                        <span id='nonConformingLoan' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>non-assumption clause</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>In a mortgage contract, a statement that prohibits a new buyer from assuming a mortgage loan without the approval of the lender.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>non-conforming loan</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A loan that does not conform to Federal National Mortgage Association (FNMA) or Federal Home Loan Mortgage Corporation (FHLMC) guidelines. Jumbo loans are nonconforming.
                            See also: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#conformingLoan" style={{ color: "red", textDecoration: "none" }}>conforming loan.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>note</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A signed document that acknowledges a debt and shows the borrower is obligated to pay it.</span>



                        <span id='openEndMortgage' style={{ marginTop: "-25px" }}></span>
                        <span ref={sectionsRef.O}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- O -</span>

                        <span id='originationFee' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed' >open-end mortgage</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A mortgage allowing the borrower to receive advances of principal from the lender during the life of the loan. See also: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#closedEndMortgage" style={{ color: "red", textDecoration: "none" }}>closed-end mortgage.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>origination fee</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The amount charged by a lender to originate and close a mortgage loan. Origination fees are usually expressed in <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#Points" style={{ color: "red", textDecoration: "none" }}>points.</a></span></span>


                        <span ref={sectionsRef.P}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- P -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>payment cap</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#cap" style={{ color: "red", textDecoration: "none" }}>cap</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>P&I</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Abbreviation for principal and interest.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>title</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>property</span>

                        <span id='Points' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>PITI</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Abbreviation for principal, interest, taxes and insurance.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>points</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Charges levied by the lender based on the loan amount. Each point equals one percent of the loan amount; for example, two points on a $100,000 mortgage is $2,000. Discount points are used to buy down the interest rate. Points can also include a loan origination fee, which is usually one point.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>pre-qualification</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Tentative establishment of a borrower's qualification for a mortgage loan amount of a specific range, based on the borrower's assets, debts, and income.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>prime rate</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The interest rate commercial banks charge their most creditworthy customers.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>principal</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The amount of the entire mortgage loan, not counting interest.  Also, as a part of PITI, the amount of the monthly mortgage payment which does not include the interest, insurance, and taxes.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>private mortgage insurance (PMI)</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#MortgageInsurance" style={{ color: "red", textDecoration: "none" }}>mortgage insurance.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>property appraisal</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#appraisal" style={{ color: "red", textDecoration: "none" }}>appraisal.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>property tax</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The amount which the state and/or locality assesses as a tax on a piece of property.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>prorate</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>To proportionally divide amounts owed by the buyer and the seller at closing.</span>


                        <span ref={sectionsRef.Q}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- Q -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>qualification</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>As determined by a lender, the ability of the borrower to repay a mortgage loan based on the borrower's credit history, employment history, assets, debts and income.</span>


                        <span ref={sectionsRef.R}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- R -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>rate cap</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#cap" style={{ color: "red", textDecoration: "none" }}>cap</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>RESPA</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Abbreviation for the Real Estate Settlement Procedures Act, which allows consumers to review settlement costs at application and once again prior to closing.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>reverse annuity mortgage</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A type of mortgage loan in which the lender makes periodic payments to the borrower. The borrower's equity in the home is used as security for the loan.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>RHCDS</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Rural Housing and Community Service</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>right of first refusal</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Purchasing a property under conditions and terms made by another buyer and accepted by the seller.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>right of rescission</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>When a borrower's principal dwelling is going to secure a loan, the borrower has three business days following signing of the loan documents to rescind or cancel the transaction. Any and all money paid by the borrower must be refunded upon rescission. The right to rescind does not apply to loans to purchase real estate or to refinance a loan under the same terms and conditions where no additional funds will be added to the existing loan.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>rollover</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>At the end of the construction loan period, the borrower's file is delivered to Bank One Mortgage Loan Servicing Dept. Prior to delivery, CLD contacts the borrower and obtains funds for the tax and insurance escrows, a final title policy and homeowner's policy. This process is called a rollover.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Rural Housing and Community Development Service</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A federal agency that administers mortgage loans for buyers in rural areas.</span>


                        <span ref={sectionsRef.S}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- S -</span>

                        <span id='secondaryMarket' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>second mortgage</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A loan that is junior to a primary or first mortgage and often has a higher interest rate and a shorter term.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>secondary market</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A market comprising investors like GNMA, FHLMC and FNMA, which buy large numbers of mortgages from the primary lenders and sell them to other investors.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>servicing</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The responsibility of collecting monthly mortgage payments and properly crediting them to the principal, taxes and insurance, as well as keeping the borrower informed of any changes in the status of the loan.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>settlement costs</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#ClosingCosts" style={{ color: "red", textDecoration: "none" }}>closing costs.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>survey</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A physical measurement of property done by a registered professional showing the dimensions and location of any buildings as well as easements, rights of way, roads, etc.</span>


                        <span ref={sectionsRef.T}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- T -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>tax deed</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A written document conveying title to property repossessed by the government due to default on tax payments.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>tax savings</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The amount of money that the homeowner is not required to pay the government in taxes because he or she owns a home.</span>

                        <span id='Tenancy' style={{ marginTop: "-25px" }}></span>
                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>taxes</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>As a part of PITI, the amount of the monthly mortgage payment which does not include the principal, interest, and insurance.</span>

                        <span className='GlossaryTermsBottomLeftContentRed'>tenancy</span>
                        <ul className='purchaseBottomLeftUL paperworkBottomLeftUL'>
                            <li><b>joint tenancy </b>- equal ownership of property by two or more parties, each with the right of survivorship.</li>
                            <li><b>tenancy by the entireties</b> - ownership of property only between husband and wife in which neither can sell without the consent of the other and the property is owned by the survivor in the event of death of either party.</li>
                            <li><b>tenancy in common</b> - equal ownership of property by two or more parties without the right of survivorship.</li>
                            <li><b>tenancy in severalty</b> - ownership of property by one legal entity or a sole party.</li>
                            <li><b>tenancy at will</b> - a license to use or occupy a property at the will of the owner.</li>
                        </ul>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>title</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A formal document establishing ownership of property.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>title insurance</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A policy issued by a title insurance company insuring the purchaser against any errors in the title search. The cost of title insurance may be paid for by the buyer, the seller or both.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>trust deed</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#deedOfTrust" style={{ color: "red", textDecoration: "none" }}>deed of trust.</a> </span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Truth In Lending Act</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The Truth In Lending Act requires lenders to disclose the Annual Percentage Rate and other associated costs to homebuyers within three working days of the loan application.
                        </span>


                        <span ref={sectionsRef.U}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- U -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>underwriter</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A professional who approves or denies a loan to a potential homebuyer based on the homebuyer's credit history, employment history, assets, debts and other factors such as loan guidelines.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Uniform Settlement Statement</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A standard document prescribed by the Real Estate Settlement Procedures Act containing information for closing which must be supplied to both buyer and seller.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>utility costs</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>Periodic housing costs for water, electricity, natural gas, heating oil, etc.</span>


                        <span ref={sectionsRef.V}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- V -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>VA loan</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'>Veterans Administration.</span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>vacation home</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'>secondary residence.</span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>variable rate mortgage (VRM)</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>See: <span className='purchaseBottomLeftContent purchaseBottomLeftContent_aTag'><a href="#adjustableRateMortgage" style={{ color: "red", textDecoration: "none" }}>adjustable rate mortgage.</a></span></span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>Veterans Administration (VA)</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The federal agency responsible for the VA loan guarantee program as well as other services for eligible veterans. In general, qualified veterans can apply for home loans with no down payment and a funding fee of 1 percent of the loan amount.</span>


                        <span ref={sectionsRef.W}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- W -</span>


                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>walk-through</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>An inspection of a property by the prospective buyer prior to closing on a mortgage.</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>warranty deed</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>A document protecting a homebuyer against any and all claims to the property.</span>


                        <span ref={sectionsRef.X}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- X -</span>

                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>No entries for "X".</span>


                        <span ref={sectionsRef.Y}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- Y -</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>yield</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The rate of earnings from an investment.</span>


                        <span ref={sectionsRef.Z}></span>
                        <span className='purchaseBottomLeftHeader purchaseBottomLeftHeaderTopBorder'>- Z -</span>

                        <span className='purchaseBottomLeftContent GlossaryTermsBottomLeftContentRed'>zoning</span>
                        <span className='purchaseBottomLeftContent purchaseBottomLeftContentmarginTop'>The ability of local governments to specify the use of private property in order to control development within designated areas of land. For example, some areas of a neighborhood may be designated only for residential use and others for commercial use such as stores, gas stations, etc.</span>



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

export default GlossaryOfMortgageTerms;
