import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import LandingPage from '../Landing/Landing';
import SignUpPage from '../Administrateur/InscriptionAdmin/SignupPage';
import SignInPageApp from '../Apprenant/Connexion/SignInPageApp';
import SignInPageAdm from '../Administrateur/ConnexionAdmin/SigninPageAdm';
import PasswordForgetPage from '../PasswordForget';
import HomePageAdmin from '../Administrateur/HomePageAdmin/HomePageAdmin';
import HomePageApp from '../Apprenant/HomePageApp/HomePageApp';
//import AccountPage from '../Account';
//import AdminPage from '../Admin';

import * as ROUTES from '../../Constant/routes';
import './App.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

// l'import de khalifa fall
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from '..Administrateur/Professeur/Home';
import { Addprofesseur } from '../Administrateur/Professeur/AjoutProfesseur/AjouterProfesseur';
import { Detailprofesseur } from '..Administrateur/Professeur/DetailProfesseur/DetailProfesseur';


import { GlobalProvider } from './context/GlobalState';

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

            // L'import de khalifa fall

            <GlobalProvider>
               <Switch>
               <Route path="/" component={Home} exact />
               <Route path="/add" component={Addprofesseur} exact />
               <Route path="/edit/:id" component={Detailprofesseur} exact />
               </Switch>
            </GlobalProvider>
        </Router>
  );
}

export default App;
