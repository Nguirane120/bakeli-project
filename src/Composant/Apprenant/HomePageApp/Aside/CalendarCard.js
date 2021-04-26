import React from 'react';
import calendrier from '../image/calendrier.jpeg'
import "../Aside/CalendarCard.css"

const CalendarCard = () => {
    return(
        <div>

                  
            <h6>Calendar</h6>
            <div className="card d-flex flex-row align-items-center card-teacher mb-3 mx-auto calendarCard">
                <div className="col-4">
                    <img className="card-img-top" src={calendrier} alt="image calendrier" />
            </div>
            <div className="card-body col-8 px-0">
                <div>
                        <h6 className="card-title my-0">Voir le calendrier des cours</h6>
                        <a href="/home/:calendar" class="stretched-link"></a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CalendarCard;