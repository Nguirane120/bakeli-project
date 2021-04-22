import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
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

// import de khalifa
import { GlobalProvider } from '../Administrateur/Professeur/context/GlobalState';

import { Home } from '../Administrateur/Professeur/Home';
import { AddEmployee } from '../Administrateur/Professeur/AjoutProfesseur/AjoutProfesseur';
import { EditEmployee } from '../Administrateur/Professeur/DetailProfesseur/DetailProfesseur';


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
          

            <GlobalProvider>
              <div className="App">
               <Switch>
               <Route path={["/", "/ajout_prof"]} component={Home} exact />
               <Route path="/list_prof" component={AddEmployee} exact />
               <Route path="/edit/:id" component={EditEmployee} exact />
               </Switch>
            </div>
           </GlobalProvider>
        </Router>
  );
}

export default App;
