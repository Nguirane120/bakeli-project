import React from 'react';
//import Calendars from './Calendars';
import AboutTeacher from './AboutTeacher';
import Statistique from './Statistique';

const Aside = () => {
    return(
        <div>
            {/*<Calendars />*/}
            <hr />
            <AboutTeacher />
            <hr />
            <Statistique />
        </div>
    )
}

export default Aside;