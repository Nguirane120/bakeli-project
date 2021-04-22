import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage(props) {
  return (
    <>
      <div className="container">
        <div classNameName="row">
          <div className="d-flex justify-content-between">
                  <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18rem"}}>
          <div className="card-header">Apprenant</div>
          <div className="card-body">
          <Link to="/signin" className="btn btn-white text-white">se connecter en tant que apprenant</Link>
          </div>
        </div>
        <div className="card text-white bg-success mb-3" style={{ maxWidth: "18rem"}}>
          <div className="card-header ">Administrateur</div>
          <div className="card-body">
            <Link to="/signup" className="btn btn-white text-white">se connecter en tant que admin</Link>
          </div>
        </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default LandingPage;