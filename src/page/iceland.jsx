import DividingLine from "../component/dividingLine";
import HeroSection2 from "../component/heroSection2";
import NavBar from "../component/navbar";
import ProductDetail from "../component/productDetail";
import { ShortSummary } from "../component/shortSummary";
import { TravelTips } from "../component/travelTips";

import IcelandImg2 from '../img/iceland4.jpg'
export function Iceland(){
    return(
        <>
            <NavBar />

            <DividingLine />
            <ShortSummary  />
         
            <DividingLine />
            <DividingLine />
            <TravelTips location="iceland" backgroundImage={IcelandImg2} />
            <DividingLine />

        </>
    );
}