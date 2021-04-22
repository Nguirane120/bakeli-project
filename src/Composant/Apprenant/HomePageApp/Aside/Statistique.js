import React from 'react';
import './statistique.css';

const Statistique = () => {
    return(
        <div>
            <div className="row mb-2">
                <div className="col-6">
                    <div className="card card-stat">
                    <div className="card-body">
                        
                        <p className="card-text">Cours complets</p>
                        <h5 className="card-title">15</h5>
                    </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card card-stat">
                    <div className="card-body">
                    <p className="card-text">Webinaire en ligne</p>
                        <h5 className="card-title">5</h5>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="card card-stat">
                    <div className="card-body">
                    <p className="card-text">En cours</p>
                        <h5 className="card-title">2</h5>
                    </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card card-stat">
                    <div className="card-body">
                    <p className="card-text">Professeur</p>
                        <h5 className="card-title">6</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistique;