import React from 'react';
import ShortApplication from '../Form/ShortApplication';


function QuickQuote() {
    return (
        <div className='quickQuoteParent'>
            <div className='quickQuoteTitleBoxParent'>
                <div className='quickQuoteTitleBox'>
                    <h1 className='quickQuoteTitle'><span>PrimeHome Mortgage, LLC</span> <span>Quick Quote</span></h1>
                </div>
            </div>

            <ShortApplication />
        </div>
    );
}

export default QuickQuote;
