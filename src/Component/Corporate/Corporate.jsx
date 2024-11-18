import React, { useState } from 'react';
import States from './States';
import TeamMember from './TeamMember';
import GoToKnowUs from './GoToKnowUs';



const Corporate = () => {


    return (
        <div className='bg-[#F0F1F3]'>
            <GoToKnowUs />
            <TeamMember />
            <States />
            {/* <Footer /> */}
        </div>
    );
};

export default Corporate;
