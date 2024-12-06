import React from 'react';
import contactUs from '../../PicesForPages/ContactUs.jpg';
import ContactForm from '../Form/ContactForm';

function ContactUs() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={contactUs} alt='contactUsImage' className='background-video contactUsImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Contact Us</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox contactUsBottomLeftBox'>
                        <span className='purchaseBottomLeftHeader'>Get In Touch</span>
                        <a href="tel:+1-513-999-2324" style={{ textDecoration: 'none' }} className='purchaseBottomLeftContent contactUsBottomLeftContent'><span>Phone: </span><span>(513)-999-2324</span></a>
                        <a href="mailto: sri@ezymtg.com" style={{ textDecoration: 'none' }} className='purchaseBottomLeftContent contactUsBottomLeftContent'><span>Email: </span><span>sri@ezymtg.com</span></a>
                        <a href="https://maps.google.com/maps/dir//8581+Mason+Montgomery+Rd+%234+Building+100+Mason,+OH+45040+USA/@39.3146419,-84.31477,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88405706534b6e95:0xe4a71b16e8b16681" style={{ textDecoration: 'none', textAlign: 'end' }} className='purchaseBottomLeftContent contactUsBottomLeftContent'><span>Address: </span><span>8581 S Mason Montgomery Rd Ste 4, Mason, OH 45040</span></a>


                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
