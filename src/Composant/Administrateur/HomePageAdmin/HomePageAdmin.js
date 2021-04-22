import React from "react"
import ListApprenant from "../Apprenant/ListApprenant"
import ApprenantProvider from "../Apprenant/context/AppreantContext";

const HomePageAdmin = () => {
    return(
        <div>
            <h6>Dashboard admin</h6>
            <ApprenantProvider>
            <ListApprenant/>
            </ApprenantProvider>
            
        </div>
    )
}

export default HomePageAdmin;