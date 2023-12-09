import React from "react";
import PersonalInformationForm from "../component/registrationForm";
import DestinationCard from "../component/destinationcCard";

import NavBar from "../component/navbar";
function Registration(){
    return(
        <>
            <NavBar />
            <DestinationCard />
            <PersonalInformationForm />
        </>
    );
}
export default Registration;