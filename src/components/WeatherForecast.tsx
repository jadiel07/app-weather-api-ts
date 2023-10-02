import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherForecast: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    // Substitua 'cidade' pelo nome da cidade que você deseja obter a previsão.
    const city = "londres";
    const apiKey = import.meta.env.ChaveApi;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados de previsão do tempo:", error);
      });
  }, []);

  return (
    <div>
      {weatherData && (
        <div>
          <h2>Previsão do Tempo para {weatherData.name}</h2>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Tempo: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};
export default WeatherForecast;
