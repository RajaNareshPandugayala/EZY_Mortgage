import React, { useRef, useState } from 'react';


function FreeReports() {
    const nextRef = useRef(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'Free Report: ',
        report01: '',
        report02: '',
        report03: ''
    });

    function updateSubjectContactUs(event) {
        event.preventDefault();

        const { name } = formData;

        setFormData(prevData => ({
            ...prevData,
            subject: `Free Report: ${name}`
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
            <span className='purchaseBottomRightHeading'>Your Free Report</span>
            <span className='purchaseBottomRightContent'>Just fill out the form below and select the free report(s) you wish to receive, and you they will be emailed to you right away.</span>
            <form className='purchaseBottomRightform' target="_self" action="https://formsubmit.co/rajanaresh.p@gmail.com" method="POST" onSubmit={updateSubjectContactUs} >

                <input type="hidden" name="_subject" id="subject" value={formData.subject + formData.firstName + " " + formData.lastName} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" ref={nextRef} value="https://google.com" />
                <input type="hidden" name="_captcha" value="false" />



                <input type='text' placeholder='FIRST NAME:' id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} autoComplete="true" required />

                <input type='text' placeholder='LAST NAME:' id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} autoComplete="true" required />

                <input type='email' placeholder='EMAIL:' id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="true" required />






                <b>Free Reports*</b>
                <label htmlFor="creditScore" className='freeReportscheckbox'>
                    <input type="checkbox" value="10 Secrets To Raising Your Credit Score" id="creditScore" name="report01" onChange={handleChange} /> 10 Secrets To Raising Your Credit Score
                </label>
                <label htmlFor="bestPrice" className='freeReportscheckbox'>
                    <input type="checkbox" value="How To Get The Best Price On Your Real Estate Purchase" id="bestPrice" name="report02" onChange={handleChange} /> How To Get The Best Price On Your Real Estate Purchase
                </label>
                <label htmlFor="reduceDebt" className='freeReportscheckbox'>
                    <input type="checkbox" value="Tips To Reduce Debt" id="reduceDebt" name="report03" onChange={handleChange} /> Tips To Reduce Debt
                </label>
                <br />

                <button className='freeReportsBottomButton' type='submit'>SUBMIT</button>
            </form>
        </div>
    );
}

export default FreeReports;
