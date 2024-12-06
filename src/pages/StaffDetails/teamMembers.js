import React from 'react';
import blankPhoto from '../../PicesForPages/blank.jpg';
import SriAnnapareddy from '../../PicesForPages/SriAnnapareddy.webp';

import { Link } from 'react-router-dom';

function YourTeamMembers() {
    const teamMembers = [
        {
            name: 'Sri Annapareddy',
            role: 'Sr. Loan Originator',
            photo: SriAnnapareddy,
            link: 'sri-annapareddy',
            nmls: '2052589',
        },
        {
            name: 'Coming Soon',
            role: '---- ---------',
            photo: blankPhoto,
            link: '#',
            nmls: '-------',
        },
    ];


    return (
        <div className='teamBoxParent'>
            <div className='teamBox'>
                <span className='teamHeading'>Meet Our Team</span>
                <span className='teamContent'>Our team at EZY Mortgage, LLC is fast, friendly, experienced, and here to help you every step of the process!</span>
                <div className='teamListBoxParent'>
                    {teamMembers.map((member, index) => (
                        <div className='teamListBox' key={index}>
                            <span className='teamListSpanImage'>
                                <img src={member.photo} alt={member.name} />
                            </span>
                            <span className='teamListNameOfficer'>
                                <span className='teamListName'>
                                    {member.link !== '#' ? (
                                        <Link to={`/our-staff/${member.link}`} className='teamListNameLink'>{member.name}</Link>
                                    ) : (
                                        member.name
                                    )}
                                </span>
                                <span className='teamListOfficer'>{member.role}</span>
                                <span className='teamListOfficer'>NMLS#: {member.nmls}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default YourTeamMembers;
