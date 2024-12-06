import React from 'react';
import MPMC from '../../PicesForPages/MonthlyPaymentCalculator.jpg';
import MortgageCalculator from '../CalculatorAndChart/mortgageCalculator';

function MonthlyPaymentMortgageCalculator() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={MPMC} alt='MPMCImage' className='background-video MPMCalculatorImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Monthly Payment Calculator</span>
                </div>
            </div>
            < MortgageCalculator />
        </div>
    );
}

export default MonthlyPaymentMortgageCalculator;
