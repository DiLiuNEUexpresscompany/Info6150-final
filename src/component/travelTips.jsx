import WeatherCard from "./weatherCard";

export function TravelTips({ location, backgroundImage }) {
  return (
    <>
      <div className="bg-white">
        <div className="bg-white">
          <h1 className="text-4xl font-bold tracking-tight text-black lg:text-6xl text-center py-5" id="titlename">Travel Tips</h1>
        </div>
        <WeatherCard address={location} backgroundImage={backgroundImage} />
      </div>
    </>
  );
}