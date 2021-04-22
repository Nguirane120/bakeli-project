import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendars = () => {
    const [value, onChange] = useState(new Date());
    return(
        <div>
            <h6>Timetable</h6>
            <div>
            <Calendar
                onChange={onChange}
                value={value}
            />
            </div>
        </div>
    )
}

export default Calendars;