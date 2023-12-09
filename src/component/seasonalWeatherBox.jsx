import '../css/main.css'
export function SeasonalWeatherBox({ name, svg, time, temp }) {
    return (
      <div>
        <div className={`${name.toLowerCase()}_svg-container`}>
          {svg}
        </div>
        <h3 className="mt-6 text-xl font-medium text-gray-900 title">{name}</h3>
        <p className="mt-2 text-base paragraph text-lg"><strong>{time}</strong><br/>{temp}</p>
      </div>
    );
  }