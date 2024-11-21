import React from 'react';
import meetOurStaff from '../../PicesForPages/MeetOurStaff.png';
import blankPhoto from '../../PicesForPages/blank.jpg';


function MeetOurStaff() {
    return (
        <div className='purchaseParent'>
            <div className='purchasetopParent'>
                <img src={meetOurStaff} alt='meetOurStaffImage' className='background-video R_FamilyImage' />
                <div className='purchasetopBox'>
                    {/* The existing Purchase span */}
                    <span>Meet Our Staff</span>
                </div>
            </div>
            <div className='purchaseBottomParent'>
                <div className='purchaseBottomBox'>
                    <div className='teamBoxParent'>
                        <div className='teamBox'>
                            <div className='teamListBoxParent'>
                                <div className='teamListBox'>
                                    <span className='teamListSpanImage'>
                                        <img src={blankPhoto} alt='blankPhoto01' />
                                    </span>
                                    <span className='teamListNameOfficer'>
                                        <span className='teamListName'>---- --------- -------</span>
                                        <span className='teamListOfficer'>Loan Officer</span>
                                    </span>
                                </div>
                                <div className='teamListBox'>
                                    <span className='teamListSpanImage'>
                                        <img src={blankPhoto} alt='blankPhoto02' />
                                    </span>
                                    <span className='teamListNameOfficer'>
                                        <span className='teamListName'>----- -------</span>
                                        <span className='teamListOfficer'>Loan Officer</span>
                                    </span>
                                </div>
                                <div className='teamListBox'>
                                    <span className='teamListSpanImage'>
                                        <img src={blankPhoto} alt='blankPhoto03' />
                                    </span>
                                    <span className='teamListNameOfficer'>
                                        <span className='teamListName'>---- ------- -----</span>
                                        <span className='teamListOfficer'>Loan Officer</span>
                                    </span>
                                </div>
                            </div>
                            <div className='teamListBoxParent'>
                                <div className='teamListBox'>
                                    <span className='teamListSpanImage'>
                                        <img src={blankPhoto} alt='blankPhoto01' />
                                    </span>
                                    <span className='teamListNameOfficer'>
                                        <span className='teamListName'>---- --------- -------</span>
                                        <span className='teamListOfficer'>Loan Officer</span>
                                    </span>
                                </div>
                                <div className='teamListBox'>
                                    <span className='teamListSpanImage'>
                                        <img src={blankPhoto} alt='blankPhoto02' />
                                    </span>
                                    <span className='teamListNameOfficer'>
                                        <span className='teamListName'>----- -------</span>
                                        <span className='teamListOfficer'>Loan Officer</span>
                                    </span>
                                </div>
                                <div className='teamListBox'>
                                    <span className='teamListSpanImage'>
                                        <img src={blankPhoto} alt='blankPhoto03' />
                                    </span>
                                    <span className='teamListNameOfficer'>
                                        <span className='teamListName'>---- ------- -----</span>
                                        <span className='teamListOfficer'>Loan Officer</span>
                                    </span>
                                </div>
                            </div>
                            <div className='teamListBoxParent'>
                                <div className='teamListBox'>
                                    <span className='teamListSpanImage'>
                                        <img src={blankPhoto} alt='blankPhoto01' />
                                    </span>
                                    <span className='teamListNameOfficer'>
                                        <span className='teamListName'>---- --------- -------</span>
                                        <span className='teamListOfficer'>Loan Officer</span>
                                    </span>
                                </div>
                                <div className='teamListBox'>
                                    <span className='teamListSpanImage'>
                                        <img src={blankPhoto} alt='blankPhoto02' />
                                    </span>
                                    <span className='teamListNameOfficer'>
                                        <span className='teamListName'>----- -------</span>
                                        <span className='teamListOfficer'>Loan Officer</span>
                                    </span>
                                </div>
                                <div className='teamListBox'>
                                    <span className='teamListSpanImage'>
                                        <img src={blankPhoto} alt='blankPhoto03' />
                                    </span>
                                    <span className='teamListNameOfficer'>
                                        <span className='teamListName'>---- ------- -----</span>
                                        <span className='teamListOfficer'>Loan Officer</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MeetOurStaff;
