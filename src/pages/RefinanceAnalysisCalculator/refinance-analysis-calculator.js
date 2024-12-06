import React from 'react';
import RAC from '../../PicesForPages/RefinanceAnalysisCalculator.jpg';
import RefinanceCalculator from '../CalculatorAndChart/refinanceCalculator';


function RefinanceAnalysisCalculator() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={RAC} alt='RACImage' className='background-video RACalculatorImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>refinance analysis calculator</span>
                </div>
            </div>
            <RefinanceCalculator />
        </div>
    );
}

export default RefinanceAnalysisCalculator;
