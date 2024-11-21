import React, { useRef, useState } from 'react';

function ContactForm() {
    const nextRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: '',
        subject: 'Contact Form: '
    });

    function updateSubjectContactUs(event) {
        event.preventDefault();

        const { name } = formData;

        setFormData(prevData => ({
            ...prevData,
            subject: `Contact Form: ${name}`
        }));

        alert("Your request has been sent successfully!");

        const currentUrl = window.location.href;
        nextRef.current.value = currentUrl;

        // Submit form manually if desired
        event.target.submit();
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    return (
        <div className='purchaseBottomRightBox contactUsBottomRightBox'>
            <span className='purchaseBottomRightHeading'>Contact Form</span>
            <span className='purchaseBottomRightContent'>Fill in this short form to contact us.</span>
            <form className='purchaseBottomRightform' target="_self" action="https://formsubmit.co/rajanaresh.p@gmail.com" method="POST" onSubmit={updateSubjectContactUs}>

                <input type="hidden" name="_subject" id="subject" value={formData.subject + formData.name} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" ref={nextRef} value="https://google.com" />
                <input type="hidden" name="_captcha" value="false" />

                <input type='text' placeholder='NAME:' id="name" name="name" value={formData.name} onChange={handleChange} autocomplete="true" required />
                <input type='email' placeholder='EMAIL:' id="email" name="email" value={formData.email} onChange={handleChange} autocomplete="true" required />
                <input type='tel' placeholder='PHONE:' id="phone" name="phone" value={formData.phone} onChange={handleChange} maxlength="10" minlength="10" pattern="[0-9]*" inputmode="numeric" autocomplete="true" required />
                <input type='text' placeholder='CITY:' id="city" name="city" value={formData.city} onChange={handleChange} autoComplete="true" required />
                <textarea cols="auto" rows="10" placeholder='QUESTION OR COMMENT:' id="message" name="message" value={formData.message} onChange={handleChange} autoComplete="true" required></textarea>

                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}

export default ContactForm;
