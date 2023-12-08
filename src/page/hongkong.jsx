import DividingLine from "../component/dividingLine";
import HeroSection2 from "../component/heroSection2";
import NavBar from "../component/navbar";
import ProductDetail from "../component/productDetail";
import { ShortSummary } from "../component/shortSummary";
import { TravelTips } from "../component/travelTips";
import hongkongImage from '../img/hk-movies-header-16-9.jpg';
import hongkongImage1 from '../img/hongkong4.jpg';
import hongkongImage2 from '../img/hongkong6.jpg'
 

export function Hongkong(){

    const product = {
        name: 'highlight of hongkong',
        href: '#',
        price: '$3,600-$5,200',
        description:
          "Hong Kong is a vibrant and cosmopolitan city that should be on every traveler's bucket list. With its captivating blend of East-meets-West culture, stunning skyline, and bustling street scenes, Hong Kong offers a unique and unforgettable experience. Get ready to explore a world of tantalizing cuisine, iconic landmarks, and cultural treasures.",
        imageSrc: hongkongImage1,
        imageAlt: 'Hongkong',
        breadcrumbs: [
          { id: 1, name: 'China', href: '#' },
          { id: 2, name: 'Hongkong', href: '#' },
        ],
        sizes: [
          { name: '5 Days', description: '5-Day Quality Tour' },
          { name: '7 Days', description: '7-Day Deluxe Tour' },
        ],
      }
    const shortSummary=`"Hong Kong is a destination that promises a vibrant and unforgettable experience. It's a place where the modern and the traditional seamlessly coexist, offering a myriad of captivating attractions for travelers. Prepare to immerse yourself in a world of stunning cityscapes, rich culture, and delectable cuisine."`;
    return(
        <>
            <NavBar />
            <HeroSection2 imageUrl={hongkongImage} title="Hongkong Guided Tours and Vacation Packages"  />
            <DividingLine />
            <ShortSummary  summary={shortSummary} />
            <ProductDetail {...product} />
            <DividingLine />
            <DividingLine />
            <TravelTips location="hongkong" backgroundImage={hongkongImage2} />
            <DividingLine />

        </>
    );
}