import React from 'react';
import RVBCalculator from '../../PicesForPages/RentingVsBuyingCalculator.jpeg';
import RVsBCalculator from '../CalculatorAndChart/RvsBCalculator';


function RentingVsBuyingCalculator() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={RVBCalculator} alt='RVBCalculatorImage' className='background-video RVBCalculatorImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Renting Vs Buying Calculator</span>
                </div>
            </div>
            <RVsBCalculator />
        </div>
    );
}

export default RentingVsBuyingCalculator;
