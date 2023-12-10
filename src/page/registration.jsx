import React, { useState } from "react";
import PersonalInformationForm from "../component/registrationForm";
import Footer from "../component/footer";

import NavBar from "../component/navbar";
import DividingLine from "../component/dividingLine";
function Registration(){

    return(
        <>
            <NavBar />
            <PersonalInformationForm />
            <DividingLine />
            <Footer />
           
        </>
    );
}
export default Registration;