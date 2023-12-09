import WeatherCard from "./weatherCard";
import '../css/main.css'
import { SeasonalWeatherBox } from "./seasonalWeatherBox";
import { BlogSection2 } from "./blog2";
export function TravelTips({ location, backgroundImage,seasonalWeather,blog}) {
  return (
    <>
      <div className="bg-white">
        <div className="bg-white">
          <h1 className="text-3xl font-bold tracking-tight text-black lg:text-6xl text-center py-5 capitalTitle">Travel Tips</h1>
        </div>
        <WeatherCard address={location} backgroundImage={backgroundImage} />
        <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-10 lg:max-w-3xl lg:px-8">
            <div className="mx-auto grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                {Array.isArray(seasonalWeather) && seasonalWeather.length > 0 ? (
                seasonalWeather.map((season, index) => (
                    <SeasonalWeatherBox key={index} {...season} />
                ))
                ) : (
                <p>No seasonal weather data available.</p>
                )}
            </div>
        </div>
        < BlogSection2 imageSrc={blog.imageSrc} title={blog.title} author={blog.author} authorLink={blog.authorLink}/>
      </div>
    </>
  );
}