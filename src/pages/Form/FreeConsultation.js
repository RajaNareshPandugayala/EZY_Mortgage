import React, { useRef, useState } from 'react';


function FreeConsultation() {
    const nextRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cellPhone: '',
        workPhone: '',
        zipCode: '',
        subject: 'Free Consultation: ',
        bestTimeToContact: '', // new field
        loanType: '' // new field
    });

    function updateSubjectContactUs(event) {
        event.preventDefault();

        const { name } = formData;

        setFormData(prevData => ({
            ...prevData,
            subject: `FreeConsultation: ${name}`
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
        <div className='purchaseBottomRightBox'>
            <span className='purchaseBottomRightHeading'>Free Consultation</span>
            <span className='purchaseBottomRightContent'>Complete this 30 second form to receive a no obligation consultation. We will analyze your situation and determine the best solution.</span>
            <form className='purchaseBottomRightform' target="_self" action="https://formsubmit.co/rajanaresh.p@gmail.com" method="POST" onSubmit={updateSubjectContactUs}>
                {/* <form className='purchaseBottomRightform' target="_self" action="https://script.google.com/macros/s/AKfycbwH69jhSfylGiWHGAJTvZtjoUI-BaHnBcTXwqsP7ZGCOTcZJpcCpPzksViyw8z4mXs/exec" method="POST" onSubmit={updateSubjectContactUs}> */}

                <input type="hidden" name="_subject" id="subject" value={formData.subject + formData.name} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" ref={nextRef} value="https://google.com" />
                <input type="hidden" name="_captcha" value="false" />
                {/* <input type="hidden" name="_autoresponse" value="Thank you for your submission! Our team will contact you soon." /> */}


                <input type='text' placeholder='NAME:' id="name"
                    name="name" value={formData.name} onChange={handleChange} autoComplete="true" required />

                <input type='tel' placeholder='CELL PHONE:' id="cellPhone" name="cellPhone" value={formData.cellPhone} onChange={handleChange} maxLength="10" minLength="10" pattern="[0-9]*" inputMode="numeric" autoComplete="true" required />

                <input type='tel' placeholder='WORK PHONE:' id="workPhone" name="workPhone" value={formData.workPhone} onChange={handleChange} maxLength="10" minLength="10" pattern="[0-9]*" inputMode="numeric" autoComplete="true" />

                <select id="bestTimeToContact" name="bestTimeToContact" value={formData.bestTimeToContact} onChange={handleChange} required >
                    <option value="" disabled>Best Time to Contact</option>
                    <option value="Morning time">Morning time</option>
                    <option value="Afternoon time">Afternoon time</option>
                    <option value="Evening time">Evening time</option>
                </select>

                <input type='email' placeholder='EMAIL:' id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="true" required />

                <input type='tel' placeholder='ZIP CODE:' id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} maxLength="6" minLength="5" pattern="[0-9]*" inputMode="numeric" autoComplete="true" required />

                <select id="loanType" name="loanType" value={formData.loanType} onChange={handleChange} required >
                    <option value="" disabled>Choose Loan Type</option>
                    <option value="Refinance"> Refinance</option>
                    <option value="Home Purchase">Home Purchase</option>
                    <option value="Home Equity">Home Equity</option>
                    <option value="Debt Consolidation">Debt Consolidation</option>
                    <option value="Home Improvement">Home Improvement</option>
                    <option value="FHA/VA - Purchase">FHA/VA - Purchase</option>
                    <option value="FHA/VA - Refinance">FHA/VA - Refinance</option>
                    <option value="Construction Loans">Construction Loans</option>
                </select>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}

export default FreeConsultation;
