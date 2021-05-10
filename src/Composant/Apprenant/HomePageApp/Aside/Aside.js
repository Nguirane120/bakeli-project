import React from 'react';
//import Calendars from './Calendars';
import AboutTeacher from './AboutTeacher';
import Statistique from './Statistique';
import CalendarCard from './CalendarCard';

const Aside = () => {
    return(
        <div>
            {/*<Calendars />*/}
            {/*<hr />*/}
            <AboutTeacher />
            <hr className="bg-white"/>
            <Statistique />
            <hr className="bg-white"/>
            <CalendarCard />
        </div>
    )
}

export default Aside;