import React from 'react';
import DCC from '../../PicesForPages/ConsolidationCalculator.jpg';
import ConsolidationCalculatorDebt from '../CalculatorAndChart/consolidationCalculatorDebt';


function DebtConsolidationCalculator() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent DCCalculatortopParent'>
                <img src={DCC} alt='DCCImage' className='background-video DCCalculatorImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Consolidation Calculator</span>
                </div>
            </div>
            <ConsolidationCalculatorDebt />
        </div>
    );
}

export default DebtConsolidationCalculator;
