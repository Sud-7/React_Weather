import TopButton from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeandLocation from "./components/TimeandLocation";
import TempreatureandDetails from "./components/TempandDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./services/weatherServices";
import getFormattedWeatherData from "./services/weatherServices";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App() {
  const [query, setQuery] = useState({ q: "Noida" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const message = query.q ? query.q : "current Location";
    toast.info(`Fetching weather for ${capitalizeFirstLetter(message)}`);

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched waeather for ${data.name}, ${data.country}`);
      setWeather(data);
    });

    // console.log(data)
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-700";
  };

  return (
    <div className="bg-gradient-to-br from-cyan-600 to-blue-700">
      <div
        className={`mx-auto max-w-screen-lg  py-5 px-32 bg-gradient-to-br shadow-gray-400 ${formatBackground()}`}
      >
        <TopButton setQuery={setQuery} />
        <Inputs setQuery={setQuery} setUnits={setUnits} />

        {weather && (
          <>
            <TimeandLocation weather={weather} />
            <TempreatureandDetails weather={weather} units={units} />
            <Forecast title={"3 Hour Step Forecast"} data={weather.hourly} />
            <Forecast title={"Daily Forecast"} data={weather.daily} />
          </>
        )}
      </div>
      <ToastContainer autoClose={2500} hideProgressBar={true} theme="colored" />
    </div>
  );
}

export default App;
