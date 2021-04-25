import React from "react"
//import Sidebar from "../../"
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import jQuery from 'jquery' 
import Aside from "./Aside/Aside"
import './HomePageApp.css';
import * as ROUTES from '../../../Constant/routes';
import Calendars from "./Aside/Calendars";
import ListeCours from "../Cours/ListeCours/ListeCours"
//import ListeCours from '../Cours/ListeCours/ListeCours'


const HomePageApp = () => {

    {(function($) {

        "use strict";
    
        var fullHeight = function() {
    
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function(){
                $('.js-fullheight').css('height', $(window).height());
            });
    
        };
        fullHeight();
    
        $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
    
    })(jQuery);}

    return(
        <>
            {/*<div className="container-fluid">*/}
                <div className="row">
                    <div className="col-md-9">
                    <div class="wrapper d-flex align-items-stretch">
                        
                    <nav id="sidebar" class="active">
                    
                            <h1><Link className="logo nav-link" to={ROUTES.HOME}>M.</Link></h1>
                            <ul class="list-unstyled components mb-5">
                            <li className="nav-item active">
                                <Link className="nav-link" to={ROUTES.HOME}><span class="fa fa-home"></span>Home</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to={ROUTES.CALENDAR}><span class="fa fa-sticky-note"></span> Calendrier</Link>
                            </li>
                            <li>
                                <a href="#"><span class="fa fa-cogs"></span> Compte</a>
                            </li>
                            <li>
                                <Link className="nav-link" to={ROUTES.HOME_ADM}><span class="fa fa-paper-plane"></span> PageAdmin</Link>
                            </li>
                            
                            </ul>

                            <div class="footer">
                                <p>
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
                                </p>
                            </div>
                        </nav>
                        {/*------Page Content------*/}  
                        <div id="content" class="p-4 p-md-5">

                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">

                        <button type="button" id="sidebarCollapse" class="btn btn-primary">
                            <i class="fa fa-bars"></i>
                            <span class="sr-only">Toggle Menu</span>
                            </button>
                            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa fa-bars"></i>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="nav navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/home:liste_cours_app"}>ListeCoursApp</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={ROUTES}>Déconnexion</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </nav>
                            
                        <h2 class="mb-4">Dashboard apprenant</h2>
                        <BrowserRouter>
                            <switch>
                                <Route path="/home:liste_cours_app">
                                    <ListeCours />
                                </Route>
                                <Route exact path="/home/:calendar">
                                    <Calendars />
                                </Route>
                            </switch>
                        </BrowserRouter>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                        <Aside />
                    </div>
                </div>
            {/*</div>*/}
            
        {/*<div className="row">
                    <div className="col-9">
                        <h2 class="mb-4">Dashboard apprenant</h2>
                        <Calendars />
                    </div> 
                    <div className="col-3">
                        <Aside />
                    </div> 
    </div>*/}

            
        </>
        
    )
}

export default HomePageApp;