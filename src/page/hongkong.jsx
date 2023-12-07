import HeroSection2 from "../component/heroSection2";
import NavBar from "../component/navbar";

import hongkongImage from '../img/hk-movies-header-16-9.jpg';

export function Hongkong(){
    return(
        <>
            <NavBar />
            <HeroSection2 imageUrl={hongkongImage} title="Hongkong Guided Tours and Vacation Packages"  />

        </>
    );
}