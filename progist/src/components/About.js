import React from 'react';
import './about/about.css';
import Offering from './about/Offering';
import Founders from './about/Founders';
import Membership from './about/Membership';
import State from './about/State';
import Certificate from './about/Certificate';


const About = () => {
    return(
        <div>
            <Offering/>
            <Founders/>
            <Membership/>
            <State/>
            <Certificate/>
        </div>
    );
}

export default About;