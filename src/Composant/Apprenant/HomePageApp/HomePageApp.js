import React from "react"
//import Sidebar from "../../"
import Aside from "./Aside/Aside"


const HomePageApp = () => {
    return(
        <>
            <h6>Dashboard apprenant</h6>
            <div className="container-fluid">
                <div className="row homePage">
                    <div className="col-md-9">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>Cours et détails</p>
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