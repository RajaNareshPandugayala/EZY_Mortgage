import React from 'react';
import RFamily from '../../PicesForPages/FHAVAStreamline.jpg';
import FreeConsultation from '../Form/FreeConsultation';

function FhaVaStreamline() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={RFamily} alt='RFamilyImage' className='background-video FHAVAStreamlineImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>FHA VA Streamline Refinance</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftHeader'>Do you currently have an FHA or VA Loan?</span>
                        <span className='purchaseBottomLeftContent'>We have the program for you! It is called the Streamline Program. You can even skip a monthly house payment and receive cash back after closing. This can mean several hundred dollars in your pocket!</span>

                        <span className='purchaseBottomLeftHeader'>Just look at the benefits!</span>
                        <ul className='purchaseBottomLeftUL paperworkBottomLeftUL'>
                            <li>Lower monthly house payment</li>
                            <li>Lower interest rate</li>
                            <li>NO out of pocket costs</li>
                            <li>NO credit requirements</li>
                            <li>15, 20 & 30 year terms available</li>
                        </ul>

                        <span className='purchaseBottomLeftHeader'>Streamline Refinance</span>
                        <span className='purchaseBottomLeftContent'>This type of refinance is similar to the FHA Streamline Program. A minimal amount of documentation is needed. If you're a Veteran, we also have special purchase programs just for you.</span>

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

export default FhaVaStreamline;
