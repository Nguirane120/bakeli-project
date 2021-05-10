import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage(props) {
  return (
    <>
      <div className="container">
        <div classNameName="row">
          <div className="d-flex justify-content-around">
            {/* <div className="card text-white bg-secondary mb-3" style={{ maxWidth: "18rem"}}>
              <div className="card-header text-center">Apprenant</div>
              <div className="card-body">
              <Link to="/signin" className="btn btn-white text-white">se connecter en tant que apprenant</Link>
              </div>
            </div> */}
          <div className="card text-white bg-info mb-3 mt-5" style={{ maxWidth: "23rem"}}>
            {/* <div className="card-header text-center">Administrateur</div> */}
            <div className="card-body">
              <Link to="/signin_adm" className="btn btn-white text-white">se connecter</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default LandingPage;