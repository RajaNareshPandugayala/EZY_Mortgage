import React from 'react';
import Testimonials from '../../PicesForPages/Testimonials.jpg';
import ClientReview from '../Client_Review/clientReview';

function TestimonialsReview() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={Testimonials} alt='NewsPaperImage' className='background-video' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Testimonials</span>
                </div>
            </div>
            <ClientReview />
        </div>
    );
}

export default TestimonialsReview;
