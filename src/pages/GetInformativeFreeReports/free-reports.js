import React from 'react';
import freeReports from '../../PicesForPages/FreeReports.jpg';
import FreeReports from '../Form/FreeReports';

function GetInformativeFreeReports() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={freeReports} alt='freeReportsImage' className='background-video freeReportsImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Order Your Free Report</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox freeReportsBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftContent'>At Ram Mortgage, LLC we have compiled these free reports to help you become a better informed consumer.</span>

                    </div>
                    <FreeReports />
                </div>
            </div>
        </div>
    );
}

export default GetInformativeFreeReports;
