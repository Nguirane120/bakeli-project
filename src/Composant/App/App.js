import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Navigation from '../Navigation/Navigation';
//import Navigation2 from '../Navigation/Navigation2';
import Navigation3 from '../Navigation/Navigation2';
import LandingPage from '../Landing/index';
import SignUpPage from '../Administrateur/InscriptionAdmin/SignupPage';
import SignInPageApp from '../Apprenant/Connexion/SignInPageApp';
import SignInPageAdm from '../Administrateur/ConnexionAdmin/SigninPageAdm';
import ListeCoursAdmin from '../Administrateur/Cours/ListeCoursAdmin/ListeCoursAdmin';
import ListeCours from '../Apprenant/Cours/ListeCours/ListeCours';
import AddCourse from '../Administrateur/Cours/AjoutCours/AddCourse';
import Archive from '../Administrateur/Cours/Archive/Archive';
import DetailArchive from '../Administrateur/Cours/Archive/DetailArchive';
import AjoutProfesseur from '../Administrateur/Professeur/AjoutProfesseur/AjoutProfesseur';
import ListeProfesseur from '../Administrateur/Professeur/ListeProfesseur/ListeProfesseur';
import DetailProfesseur from '../Administrateur/Professeur/DetailProfesseur/DetailProfesseur';
import AjoutApprenant from '../Administrateur/Apprenant/AjoutApprenant/AjoutApprenant';
import ListeApprenant from '../Administrateur/Apprenant/ListeApprenant/ListeApprenant';
import DetailApprenant from '../Administrateur/Apprenant/DetailApprenant/DetailApprenant';
import Calendars from '../Apprenant/HomePageApp/Aside/Calendars';
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
                {/*<Navigation />
                <Navigation2 />*/}
                {/* <Navigation3 /> */}

                {/* <hr/> */}
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPageApp} />
                <Route path={ROUTES.SIGN_IN_ADM} component={SignInPageAdm} />
                <Route path={ROUTES.HOME} component={HomePageApp} />
                <Route path={ROUTES.HOME_ADM} component={HomePageAdmin} />
                <Route path={ROUTES.COURS_ADM} component={ListeCoursAdmin} />
                <Route path={ROUTES.COURS_APP} component={ListeCours} />
                <Route path={ROUTES.ADD_COURSE} component={AddCourse} />
                <Route path={ROUTES.ARCHI_COURSE} component={Archive} />
                <Route path={ROUTES.DETAIL_ARCHI_COURSE} component={DetailArchive} />
                <Route path={ROUTES.ADD_PROF} component={AjoutProfesseur} />
                <Route path={ROUTES.LISTE_PROF} component={ListeProfesseur} />
                <Route path={ROUTES.DETAIL_PROF} component={DetailProfesseur} />
                <Route path={ROUTES.ADD_APP} component={AjoutApprenant} />
                <Route path={ROUTES.LISTE_APP} component={ListeApprenant} />
                <Route path={ROUTES.DETAIL_APP} component={DetailApprenant} />
                {/*<Route path={ROUTES.CALENDAR} component={Calendars} />*/}
            </div>
        </Router>
  );
}

export default App;
