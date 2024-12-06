import React, { useState } from 'react';
import calcSmall from '../../PicesForPages/calc-small.jpg';

function HomePageMonthlyPayment() {
    const [loanAmount, setLoanAmount] = useState('');
    const [monthlyPayments, setMonthlyPayments] = useState([null, null, null]);

    const loanDetails = [
        { term: 30, interestRate: 6.196, apr: 6.272, label: '30 Yr Fxd' },
        { term: 30, interestRate: 5.458, apr: 6.551, label: '30 Yr Fxd FHA' },
        { term: 15, interestRate: 5.521, apr: 5.649, label: '15 Yr Fxd' },
    ];

    const calculateMonthlyPayment = () => {
        const principal = parseFloat(loanAmount);
        if (!principal || principal <= 0) {
            alert('Please enter a valid loan amount.');
            setMonthlyPayments([null, null, null]);
            return;
        }

        const payments = loanDetails.map(({ term, interestRate }) => {
            const monthlyInterest = parseFloat(interestRate) / 100 / 12;
            const totalMonths = term * 12;

            if (monthlyInterest === 0) {
                return (principal / totalMonths).toFixed(2); // Simple division for zero interest
            }

            const monthlyPayment =
                (principal * monthlyInterest) /
                (1 - Math.pow(1 + monthlyInterest, -totalMonths));

            return monthlyPayment.toFixed(2);
        });

        setMonthlyPayments(payments);
    };

    return (
        <div className='calculateBoxParent'>
            <div className='calculateBox'>
                <div className="calculator">
                    <div className='calculateHeading'>Calculate Monthly Payment*</div>
                    <div className='calculateContentBox'>
                        <span>
                            <img src={calcSmall} alt='Calculator' className='calcSmallImage' />
                        </span>
                        <span className='calculatorLeftSide'>
                            <table className="mpc table table-responsive" cellSpacing="0" cellPadding="0" border="0">
                                <thead>
                                    <tr className="ths">
                                        <th>Term</th>
                                        <th>Rate</th>
                                        <th>APR</th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loanDetails.map((detail, index) => (
                                        <tr key={index}>
                                            <td>{detail.label}</td>
                                            <td>{detail.interestRate}%</td>
                                            <td>{detail.apr}%</td>
                                            <td>${monthlyPayments[index] || '---'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <label htmlFor="loanAmount" className='calculatorInputText'>Loan Amount ($)
                                <input
                                    type="number"
                                    id="loanAmount" className='calculatorInput'
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(e.target.value)}
                                    placeholder="Enter loan amount"
                                />
                            </label>
                            <button onClick={calculateMonthlyPayment} className="calculatorButton">
                                Calculate
                            </button>
                            <span className='calculatorPara'>*=This is only an estimate, provided for illustrative purposes only. Actual rates and payments may vary. It does not constitute a quote.</span>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePageMonthlyPayment;
