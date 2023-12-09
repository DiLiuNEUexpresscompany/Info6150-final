import React, { useEffect, useState }  from "react";
import moment from 'moment-timezone';
import '../css/main.css'
function WeatherCard({address,backgroundImage}){

    const [data,setData]=useState(null);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(0);
    const [timer, setTimer] = useState(moment(Date.now()).format("YYYY/MM/DD HH/mm/ss"));
  
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setRefresh((r) => r + 1);
          setTimer(moment().tz(data.timezone).format("YYYY/MM/DD HH/mm/ss"));
        }, 1000);
        return () => clearTimeout(timeoutId);
      }, [refresh, data]);

    useEffect(()=>{
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}?unitGroup=metric&key=GGSXSG4QT5DSTGRAH86GC2UVV&contentType=json`, {
            "method": "GET",
            "headers": {
            }
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setData(data);
          })
          .catch(err => {
            console.error(err);
            setError(err);
          });
    },[address]
    );
    if (error) {
        return <div>Error fetching weather data</div>;
      }
    
    if (!data) {
        return <div>Loading...</div>;
    }
    const {
        currentConditions: {
          temp,
          conditions,
          humidity,
          winddir,
          windspeed,
          pressure,
          precip,
          uvindex,
        },
        timezone,
      } = data;

    return(
        <div className="max-w-xs overflow-hidden rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-100 mx-auto">
        <div className="flex items-end justify-end h-32 p-4 dark:bg-gray-500 bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <p className="px-2 py-1 text-sm tracking-wide text-white title dark:text-gray-100 uppercase dark:bg-gray-800 bg-opacity-75 rounded shadow-lg">
            {address}
          </p>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex flex-col flex-1 gap-4">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <span className="text-5xl font-semibold title orange">{temp}°</span>
              </div>
            </div>
            <p className="text-lg title">
              {conditions}.
            </p>
          </div>
          <div className="text-sm leading">
            <p className="text-sm title orange">{timer}</p>
            <div className="flex items-center paragraph">
                <br />  <br /><br />
                {windspeed}-{winddir} KPH winds.
                <br />
                {pressure} hPa
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-8 p-4 border-t dark:text-gray-400 dark:border-gray-700">
          <div className="flex items-center space-x-1">
            <span className="font-bold text-sm title">{uvindex}</span>
            <span className="text-base paragraph ">UV</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-bold text-sm title">{precip}%</span>
            <span className="text-base paragraph">Precip</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="font-bold text-sm title">{humidity}%</span>
            <span className="text-base paragraph">Humidity</span>
          </div>
        </div>
      </div>
    );
}

export default WeatherCard;