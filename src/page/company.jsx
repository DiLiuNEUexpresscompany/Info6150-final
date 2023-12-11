import DividingLine from "../component/dividingLine";
import Footer from "../component/footer";
import { Herosection3 } from "../component/herosection3";
import NavBar from "../component/navbar";



export function CompanyPage(){
    return(
        <>
            <div className="bg-white py-5">
                <NavBar />
                <Herosection3 />
                <DividingLine />
                <Footer />
            </div>
        </>

    );
}