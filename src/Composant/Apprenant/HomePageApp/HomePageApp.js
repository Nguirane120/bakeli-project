import React from "react"
//import Sidebar from "../../"
import Aside from "./Aside/Aside"
import './HomePageApp.css';
//import ListeCours from '../Cours/ListeCours/ListeCours'


const HomePageApp = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="row homePage">
                    <div className="col-md-9">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                    {/*<ListeCours />*/}
                                    <h4>La liste et le deatil des cours pour les apprenants s'afficheront ici</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Aside />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default HomePageApp;