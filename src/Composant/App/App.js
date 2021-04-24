import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import LandingPage from '../Landing/Landing';
import SignUpPage from '../Administrateur/InscriptionAdmin/SignupPage';
import SignInPageApp from '../Apprenant/Connexion/SignInPageApp';
import SignInPageAdm from '../Administrateur/ConnexionAdmin/SigninPageAdm';
//import PasswordForgetPage from '../PasswordForget';
import HomePageAdmin from '../Administrateur/HomePageAdmin/HomePageAdmin';
import HomePageApp from '../Apprenant/HomePageApp/HomePageApp';
//import AccountPage from '../Account';
//import AdminPage from '../Admin';

import * as ROUTES from '../../Constant/routes';
import './App.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"




const App = () => {
  return (
    <Router>
            <div>
                <Navigation />

                <hr/>
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPageApp} />
                <Route path={ROUTES.SIGN_IN_ADM} component={SignInPageAdm} />
                <Route path={ROUTES.HOME} component={HomePageApp} />
                <Route path={ROUTES.HOME_ADM} component={HomePageAdmin} />
            </div>
          

        </Router>
  );
}

export default App;
