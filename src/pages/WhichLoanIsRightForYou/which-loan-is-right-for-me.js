import React from 'react';
import RightLoan from '../../PicesForPages/WhichLoanisRightForYou.jpg';
import FreeConsultation from '../Form/FreeConsultation';

function RightLoanForYou() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={RightLoan} alt='RightLoanImage' className='background-video RightLoanImage' />
                <div className='purchasetopBox'>
                    <span>Which Loan is Right For You?</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftContent'>
                            In the past every home owner got the same loan: a 30 year fixed mortgage. Today there are many different loan programs and choosing the right one could save you hundreds of dollars on your monthly payments.
                        </span>

                        {/* Table 1 */}
                        <table className='loanTable'>
                            <thead >
                                <tr>
                                    <th className='loanTable_left'>How Long Do You Plan On Living In The House?</th>
                                    <th className='loanTable_right'>We Recommend:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='loanTable_left'>Not Very Long (1-3 Years)</td>
                                    <td className='loanTable_right'>3/1 ARM, 1 year ARM or 6 month ARM</td>
                                </tr>
                                <tr className='loanTable_td_bgcolor'>
                                    <td className='loanTable_left'>A few years (3-5 Years)</td>
                                    <td className='loanTable_right'>5/1 ARM</td>
                                </tr>
                                <tr>
                                    <td className='loanTable_left'>At least 5 years (5-7 years)</td>
                                    <td className='loanTable_right'>7/1 ARM</td>
                                </tr>
                                <tr className='loanTable_td_bgcolor'>
                                    <td className='loanTable_left'>Around 10 years (7-10 years)</td>
                                    <td className='loanTable_right'>10/1 ARM, 30 yr fixed or 15 yr fixed</td>
                                </tr>
                                <tr>
                                    <td className='loanTable_left'>A long time (10 plus years)</td>
                                    <td className='loanTable_right'>30 year fixed or 15 year fixed</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Table 2 */}
                        <table className='loanTable loanTable00'>
                            <thead>
                                <tr>
                                    <th>Loan Programs</th>
                                    <th>Advantages</th>
                                    <th>Disadvantages</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='loanTable_left'><b>30 year Fixed <br /> 15 year Fixed</b></td>
                                    <td>
                                        <ul>
                                            <li>Monthly payments won't change</li>
                                            <li>Interest rate Fixed</li>
                                            <li>Protected if rates go up</li>
                                            <li>Can refinance if rates go down</li>
                                        </ul>
                                    </td>
                                    <td className='loanTable_right'>
                                        <ul><li>Higher interest rate</li>
                                            <li>Higher mortgage payments</li>
                                            <li>Rate does not drop if interest rates improve</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot className='loanTable_tfoot'>
                                <tr>
                                    <td colSpan={3} style={{ textAlign: "center", border: "none", paddingTop: '20px' }} >
                                        Apply now!
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                        {/* Table 3 */}
                        <table className='loanTable loanTable00'>
                            <thead>
                                <tr>
                                    <th>Loan Programs</th>
                                    <th>Advantages</th>
                                    <th>Disadvantages</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='loanTable_left'><b>Adjustable Rate Mortgages (ARMS)</b></td>
                                    <td>
                                        <ul>
                                            <li>Monthly payments won't change</li>
                                            <li>Interest rate Fixed</li>
                                            <li>Protected if rates go up</li>
                                            <li>Can refinance if rates go down</li>
                                        </ul>
                                    </td>
                                    <td className='loanTable_right'>
                                        <ul>
                                            <li>Higher interest rate</li>
                                            <li>Higher mortgage payments</li>
                                            <li>Rate does not drop if interest rates improve</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot className='loanTable_tfoot'>
                                <tr>
                                    <td colSpan={3} style={{ textAlign: "center", border: "none", paddingTop: '20px' }} >
                                        Apply now!
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                        {/* Table 4 */}
                        <table className='loanTable loanTable00'>
                            <thead>
                                <tr>
                                    <th>Loan Programs</th>
                                    <th>Advantages</th>
                                    <th>Disadvantages</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='loanTable_left'><b>Balloon Mortgages</b></td>
                                    <td>
                                        <ul>
                                            <li>Lower initial monthly payment</li>
                                            <li>Lower payment over a shorter period of time</li>
                                            <li>Many balloon mortgages offer the option to convert to a new loan after the initial term.</li>
                                        </ul>
                                    </td>
                                    <td className='loanTable_right'>
                                        <ul>
                                            <li>Risk of rates being higher at the end of the initial fixed period</li>
                                            <li>Risk of foreclosure if you cannot make balloon payment or if you cannot refinance or if you cannot exercise the conversion option</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot className='loanTable_tfoot'>
                                <tr>
                                    <td colSpan={3} style={{ textAlign: "center", border: "none", paddingTop: '20px' }} >
                                        Apply now!
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                        {/* Table 5 */}
                        <table className='loanTable loanTable00'>
                            <thead>
                                <tr>
                                    <th>Loan Programs</th>
                                    <th>Advantages</th>
                                    <th>Disadvantages</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='loanTable_left'><b>First Time Buyer Programs</b></td>
                                    <td>
                                        <ul>
                                            <li>Lower down payment</li>
                                            <li>Easier to qualify</li>
                                            <li>Sometimes you may get lower rate</li>
                                        </ul>
                                    </td>
                                    <td className='loanTable_right'>
                                        <ul>
                                            <li>May be subject to income and property value limitations</li>
                                            <li>Some programs which have government subsidies may have a recapture tax if you sell the house too early.</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot className='loanTable_tfoot'>
                                <tr>
                                    <td colSpan={3} style={{ textAlign: "center", border: "none", paddingTop: '20px' }} >
                                        Apply now!
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                        {/* Table 6 */}
                        <table className='loanTable loanTable00'>
                            <thead>
                                <tr>
                                    <th>Loan Programs</th>
                                    <th>Advantages</th>
                                    <th>Disadvantages</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='loanTable_left'><b>No point, No fee Programs</b></td>
                                    <td>
                                        <ul>
                                            <li>No closing costs</li>
                                            <li>Less money required to close</li>
                                        </ul>
                                    </td>
                                    <td className='loanTable_right'>
                                        <ul>
                                            <li>Higher rates</li>
                                            <li>Higher payments</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot className='loanTable_tfoot'>
                                <tr>
                                    <td colSpan={3} style={{ textAlign: "center", border: "none", paddingTop: '20px' }} >
                                        Apply now!
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                        {/* Table 7 */}
                        <table className='loanTable loanTable00'>
                            <thead>
                                <tr>
                                    <th>Loan Programs</th>
                                    <th>Advantages</th>
                                    <th>Disadvantages</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='loanTable_left'><b>Home Equity Line of Credit</b></td>
                                    <td>
                                        <ul>
                                            <li>You only borrow what you need</li>
                                            <li>Pay interest only on what you borrow</li>
                                            <li>Flexible access to funds</li>
                                            <li>Interest may be tax deductible</li>
                                        </ul>
                                    </td>
                                    <td className='loanTable_right'>
                                        <ul>
                                            <li>Rates can change. The maximum interest rate is normally high.</li>
                                            <li>Payments can change</li>
                                            <li>Harder to refinance your first mortgage</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot className='loanTable_tfoot'>
                                <tr>
                                    <td colSpan={3} style={{ textAlign: "center", border: "none", paddingTop: '20px' }} >
                                        Apply now!
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                        {/* Table 8 */}
                        <table className='loanTable loanTable00'>
                            <thead>
                                <tr>
                                    <th>Loan Programs</th>
                                    <th>Advantages</th>
                                    <th>Disadvantages</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='loanTable_left'><b>Home Equity Fixed Loan</b></td>
                                    <td>
                                        <ul>
                                            <li>Fixed payments</li>
                                            <li>Interest may be tax deductible</li>
                                        </ul>
                                    </td>
                                    <td className='loanTable_right'>
                                        <ul>
                                            <li>Higher interest rates than on 1st mortgages</li>
                                            <li>Harder to refinance your first mortgage</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot className='loanTable_tfoot'>
                                <tr>
                                    <td colSpan={3} style={{ textAlign: "center", border: "none", paddingTop: '20px' }} >
                                        Apply now!
                                    </td>
                                </tr>
                            </tfoot>
                        </table>

                        <span className='purchaseBottomLeftContent'>
                            In Addition to these standard loan programs we offer a large number of specialized loans to fit your needs please call or email for more information.
                        </span>

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
