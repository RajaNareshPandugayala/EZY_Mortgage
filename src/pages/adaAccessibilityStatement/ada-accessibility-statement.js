import React from 'react';
import ADA_Statement from '../../PicesForPages/ADA_Statement.jpg';
import FreeConsultation from '../Form/FreeConsultation';

function AdaAccessibilityStatement() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={ADA_Statement} alt='NewsPaperImage' className='background-video ADA_StatementImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>ADA Accessibility Statement</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftContent'>EZY Mortgage, LLC is committed to providing a website that is accessible to all its customers and compliant with accessibility guidelines. We are continually making improvements to meet these guidelines, and our website has been designed with accessibility in mind.</span>
                        <span className='purchaseBottomLeftContent'>If you need assistance or have specific questions or feedback about this site’s accessibility, please contact us via email at <a href="mailto: sri@ezymtg.com" style={{ textDecoration: 'none', color: 'red', fontWeight: 'bold' }}>sri@ezymtg.com</a></span>
                        <span className='purchaseBottomLeftContent'>If you have found an inaccessible area on the site, please assist our team by informing us of the issue via email at <a href="mailto: sri@ezymtg.com" style={{ textDecoration: 'none', color: 'red', fontWeight: 'bold' }} >sri@ezymtg.com</a></span>
                        <span className='purchaseBottomLeftContent'>In the event a page cannot be made accessible, we will work with you to make a text version of the content available.</span>

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

export default AdaAccessibilityStatement;
