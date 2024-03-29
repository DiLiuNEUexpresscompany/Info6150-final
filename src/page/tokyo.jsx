import DividingLine from "../component/dividingLine";
import '../css/main.css'
import Footer from "../component/footer";
import HeroSection2 from "../component/heroSection2";
import NavBar from "../component/navbar";
import ProductDetail from "../component/productDetail";
import { ShortSummary } from "../component/shortSummary";
import { TravelTips } from "../component/travelTips";
import tokyoImage from '../img/tokyo.jpg';
import tokyoImage1 from '../img/tokyo3.jpg';
import tokyoImage2 from '../img/tokyo4.webp'
import tokyoImage3 from '../img/Department-store-complex-shopping-district-ward-Shibuya.webp'
import CommentBox from "../component/commentBox";
import { Itinerary } from "../component/Itinerary";
import tokyoImage4 from '../img/tokyo-city-neon-lights.jpg'

 

export function Tokyo(){

    const product = {
        name: 'Tokyo: City Experience',
        href: '#',
        price: '$3,779-$6,663',
        description:
          "Immerse yourself in the vibrant city of Tokyo, Japan, and embark on a captivating journey through its diverse attractions and cultural wonders. Explore the bustling streets of Shibuya, the vibrant shopping district of Ginza, and the historic temples of Asakusa. From the iconic Tokyo Skytree to the serene gardens of the Imperial Palace, discover the contrasting beauty of modern architecture and traditional landmarks.Uncover the rich history and culture of Tokyo as you visit the ancient Meiji Shrine, dedicated to Emperor Meiji and Empress Shoken. Experience the tranquility of the traditional tea ceremony and witness the precision and artistry of Japanese craftsmanship at a local artisan workshop.",
        imageSrc: tokyoImage1,
        imageAlt: 'Tokyo',
        breadcrumbs: [
          { id: 1, name: 'Japan', href: '#' },
          { id: 2, name: 'Tokyo', href: '#' },
        ],
        disc:15,
        sizes: [
          { name: '5 Days', description: '5-Day Quality Tour' },
          { name: '6 Days', description: '6-Day Deluxe Tour' },
        ],
      }


    const shortSummary=`"If there’s one city to totally immerse yourself in, it’s Tokyo. That’s because Tokyo is a billion different things all at once. It’s ancient and modern, it’s anime and couture, it’s maguro nigiri and Mt. Fuji—and all that’s just the beginning."`;
    const itineraryData = [
      { day: 'DAY1', route: 'Overnight flight' },
      { day: 'DAY2', route: "Arrive in Tokyo" },
      { day: 'DAY3', route: 'Tour Tokyo + Welcome Dinner' },
      { day: 'DAY4', route: 'Free time + sushi making experience' },
      { day: 'DAY5', route: 'Free day + included dinner' },
      { day: 'DAY6', route: 'Free day + optional Hakone day trip' },
      { day: 'DAY7', route: 'Farewell Dinner+Fly home' },
    ];

    const tokyoSeasonsData = [
        {
          name: "SPRING",
          svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="qi-101-fill h-24 w-auto red" viewBox="0 0 16 16">
                      <path d="M4.745 1.777a.516.516 0 1 0 1.007-.224L5.496.403A.516.516 0 0 0 4.49.627l.255 1.15ZM1.023 3.535l.994.633a.516.516 0 0 0 .554-.87l-.994-.633a.516.516 0 0 0-.554.87ZM.628 8.043l1.15-.256a.516.516 0 0 0-.223-1.008l-1.15.256a.516.516 0 1 0 .223 1.008Zm10.238-2.28a.535.535 0 0 0 .112-.012l1.15-.256a.516.516 0 1 0-.224-1.008l-1.15.256a.516.516 0 0 0 .112 1.02ZM8.522 2.728a.516.516 0 0 0 .712-.158l.633-.994a.516.516 0 0 0-.87-.554l-.633.994a.516.516 0 0 0 .158.712ZM2.819 7.032c.071.303.182.596.331.87a3.13 3.13 0 0 0 .908-.486 2.453 2.453 0 0 1-.232-.608A2.504 2.504 0 0 1 8.714 5.72l.004.038a5.42 5.42 0 0 1 1.064.25 3.51 3.51 0 0 0-.061-.512 3.535 3.535 0 0 0-6.902 1.536Zm9.175 7.364A4.758 4.758 0 0 1 8.406 16a4.76 4.76 0 0 1-3.537-1.547 2.908 2.908 0 0 1-1.056.197C2.258 14.65 1 13.441 1 11.95s1.26-2.7 2.813-2.7c.173 0 .342.015.507.044C5.124 7.924 6.652 7 8.406 7c1.769 0 3.308.94 4.107 2.328a2.93 2.93 0 0 1 .675-.078c1.553 0 2.812 1.209 2.812 2.7s-1.26 2.7-2.813 2.7a2.9 2.9 0 0 1-1.193-.254Z"/>
                    </svg>
          ),
          time: "MAR - MAY",
          temp: "AVG 10°-25° Temp."
        },
        {
            name: "SUMMER",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="qi-100 h-24 w-auto orange" viewBox="0 0 16 16">
                <path d="M7.655 2.357a.5.5 0 0 0 .854-.353v-1.5a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 .146.353Zm-4.08 1.861c.06.026.126.039.191.039l.001-.001a.5.5 0 0 0 .355-.855l-1.064-1.06a.5.5 0 0 0-.707.708l1.062 1.06a.498.498 0 0 0 .162.11ZM.503 8.496h1.5a.5.5 0 1 0 0-1h-1.5a.5.5 0 0 0 0 1Zm1.914 5.221a.501.501 0 0 0 .631-.063l1.063-1.06a.5.5 0 0 0-.708-.707l-1.062 1.06a.5.5 0 0 0 .076.77Zm5.225 2.14a.5.5 0 0 0 .854-.354v-1.5a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 .146.354Zm5.467-2.084a.5.5 0 0 0 .544-.816l-1.06-1.06a.498.498 0 0 0-.832.152.5.5 0 0 0 .126.555l1.06 1.06a.496.496 0 0 0 .162.109Zm.893-5.263h1.5a.5.5 0 1 0 0-1h-1.5a.5.5 0 0 0 0 1Zm-2.031-4.327a.5.5 0 0 0 .633-.063l1.06-1.06a.5.5 0 1 0-.708-.708l-1.06 1.06a.5.5 0 0 0 .075.77Zm-6.466.075a4.5 4.5 0 1 1 5 7.484 4.5 4.5 0 0 1-5-7.484Zm4.445.832a3.5 3.5 0 1 0-3.89 5.82 3.5 3.5 0 0 0 3.89-5.82Z"/>
              </svg>
            ),
            time: "JULY - AUG",
            temp: "AVG 27°-38° Temp."
          },
          {
            name: "AUTUMN",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="qi-509 h-24 w-auto brown" viewBox="0 0 16 16">
                <path d="M.25 11a.25.25 0 1 0 0 .5h9.5a.25.25 0 1 0 0-.5H.25Zm3 1.5a.25.25 0 1 0 0 .5h3.5a.25.25 0 1 0 0-.5h-3.5ZM10 14.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 1 1 0 .5h-3.5a.25.25 0 0 1-.25-.25ZM8.25 12.5a.25.25 0 1 0 0 .5h7.5a.25.25 0 1 0 0-.5h-7.5ZM1 14.25a.25.25 0 0 1 .25-.25h7.5a.25.25 0 1 1 0 .5h-7.5a.25.25 0 0 1-.25-.25Zm2.25 1.25a.25.25 0 1 0 0 .5h9.5a.25.25 0 1 0 0-.5h-9.5ZM7.9 10c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z"/>
              </svg>
            ),
            time: "SEP - NOV",
            temp: "AVG 17°-27° Temp."
          },
          {
            name: "WINTER",
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="qi-400-fill h-24 w-auto blue" viewBox="0 0 16 16">
                <path d="M5.501 12a.35.35 0 0 0-.35.35v.544l-.47-.272a.35.35 0 1 0-.35.606l.47.272-.47.272a.35.35 0 1 0 .35.606l.47-.272v.544a.35.35 0 1 0 .7 0v-.544l.47.272a.35.35 0 1 0 .35-.606l-.47-.272.47-.272a.35.35 0 1 0-.35-.606l-.47.272v-.544a.35.35 0 0 0-.35-.35Zm5 0a.35.35 0 0 0-.35.35v.544l-.47-.272a.35.35 0 1 0-.35.606l.47.272-.47.272a.35.35 0 1 0 .35.606l.47-.272v.544a.35.35 0 1 0 .7 0v-.544l.47.272a.35.35 0 1 0 .35-.606l-.47-.272.47-.272a.35.35 0 1 0-.35-.606l-.47.272v-.544a.35.35 0 0 0-.35-.35Zm1.226-3.783A4.99 4.99 0 0 1 7.9 10a4.988 4.988 0 0 1-3.773-1.719 3 3 0 1 1-.586-5.732A4.998 4.998 0 0 1 7.9 0a4.999 4.999 0 0 1 4.38 2.587 3 3 0 1 1-.553 5.63Z"/>
              </svg>
            ),
            time: "DEC - FEB",
            temp: "AVG -5°-12° Temp."
          },
      ];

      const tokyoBlog = {
        imageSrc: tokyoImage4,
        title: "Akihabara--A lively electric street with a unique cultural atmosphere.",
        author: "Miriam Orr",
        authorLink: "https://livejapan.com/en/in-tokyo/in-pref-tokyo/in-akihabara/article-a0000110/"
      };
    return(
        <>
            <NavBar />
            <HeroSection2 imageUrl={tokyoImage} title="Tokyo Guided Tours and Vacation Packages"  />
            <DividingLine />
            <ShortSummary  summary={shortSummary} />
            <ProductDetail {...product} />
            <DividingLine />
            <CommentBox />
            <DividingLine />
            <Itinerary itineraryData={itineraryData} imageSrc={tokyoImage2} />
            <DividingLine />
            <TravelTips location="tokyo" backgroundImage={tokyoImage3} seasonalWeather={tokyoSeasonsData} blog={tokyoBlog} />
            <DividingLine />
            <Footer />
        </>
    );
}