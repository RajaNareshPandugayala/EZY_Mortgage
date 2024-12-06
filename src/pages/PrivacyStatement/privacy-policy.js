import React from 'react';
import PrivacyPolicy from '../../PicesForPages/PrivacyPolicy.jpg';
import FreeConsultation from '../Form/FreeConsultation';

function PrivacyPolicyStatement() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={PrivacyPolicy} alt='tlpImage' className='background-video PrivacyPolicyImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Privacy Statement</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='purchaseBottomLeftBox'>
                        <span className='purchaseBottomLeftContent'>EZY Mortgage, LLC has created this privacy statement in order to demonstrate our firm commitment to privacy.</span>

                        <span className='purchaseBottomLeftHeader'>What personal information is being collected?</span>
                        <span className='purchaseBottomLeftContent'>Unless this web site asks for specific personal information in order to respond to requests for information or to register uses for particular services, only the following information will be collected when you use this site: · your server address; · the date and time of your visit to the site; · the pages you accessed and the documents downloaded; · the previous site you visited; and · the type of browser you are using. This information is collected for statistical purposes and to enable us to improve the navigation functions of our web site.</span>

                        <span className='purchaseBottomLeftHeader'>Who is collecting personal information?</span>
                        <span className='purchaseBottomLeftContent'>Where this site specifically asks for your personal information (for example to respond to requests for information or to register users for particular services), your personal information will only be collected by staff of EZY Mortgage, LLC who have responsibility for responding to such requests or administrating such registrations.</span>

                        <span className='purchaseBottomLeftHeader'>How is personal information used?</span>
                        <span className='purchaseBottomLeftContent'>Personal information collected on this web site will only be used for the purposes stated at the time of collection. Your personal information will not be forwarded to any third party, added to a mailing list or used for any other purpose without your consent.</span>

                        <span className='purchaseBottomLeftHeader'>Cookies</span>
                        <span className='purchaseBottomLeftContent'>Cookies can be either "persistent" or "session" based. Persistent cookies are stored on your computer, contain an expiration date, and may be used to track your browsing behaviour upon return to the issuing web site. Session cookies are short-lived, are used only during a browsing session, and expire when you quit your browser. Upon closing your browser the session cookie set by this web site is destroyed and no personal information is maintained which might identify you should you visit our web site at a later date. Access to personal information collected on this site Unless required by law to do so EZY Mortgage, LLC will only disclose personal information collected on this site to a third party if consent has been provided.</span>

                        <span className='purchaseBottomLeftHeader'>Security of personal information collected on this site</span>
                        <span className='purchaseBottomLeftContent'>This site does not provide facilities to guarantee the secure transmission of information across the Internet. Whilst reasonable efforts are used to provide security, users should be aware that there are inherent risks in the transmission of information across the Internet.</span>

                        <span className='purchaseBottomLeftHeader'>Outside Links</span>
                        <span className='purchaseBottomLeftContent'>These sites may on occasion provide links to other sites for your convenience or additional information. EZY Mortgage, LLC is not responsible for any content or practices of these sites.</span>

                        <span className='purchaseBottomLeftHeader'>Your Rights</span>
                        <span className='purchaseBottomLeftContent'>You can request access to the personal information (if any) that we keep on record. If you believe any information that we keep on record is incorrect or out of date you may request that it be corrected. There is no fee for requesting access to your information, however, we may charge you the reasonable cost of processing your request.</span>

                        <span className='purchaseBottomLeftHeader'>Further Information</span>
                        <span className='purchaseBottomLeftContent'>For further information about this Privacy Statement contact <a href="mailto: sri@ezymtg.com" style={{ textDecoration: 'none', color: 'red', fontWeight: 'bold' }} >sri@ezymtg.com</a> .</span>


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

export default PrivacyPolicyStatement;
