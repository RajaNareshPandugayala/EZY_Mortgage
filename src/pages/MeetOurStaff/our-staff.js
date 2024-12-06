import React from 'react';
import meetOurStaff from '../../PicesForPages/MeetOurStaff.png';
import YourTeamMembers from '../StaffDetails/teamMembers';


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

            <YourTeamMembers />

        </div>
    );
}

export default MeetOurStaff;
