import NavBar from "../component/navbar";
import HeroSection from "../component/herosection";
import DividingLine from "../component/dividingLine";
import { ShortSummaryforIndex } from "../component/shortSummaryforIndex";
import { RecommendedProduct } from "../component/recommendedProduct";
import BlogSection1 from "../component/blog1";
import Footer from "../component/footer";
function Home(){
    return(
        <>
            <NavBar />
            <HeroSection />
            <DividingLine />
            <ShortSummaryforIndex />
            <RecommendedProduct />
            <DividingLine />
            <BlogSection1 />
            <DividingLine />
            <Footer />
        </>
    );

}
export default Home;