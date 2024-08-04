"use client";

import { useEffect, useState } from "react";
import { FilterIcon, ThermometerIcon } from "./Icons";
import { AirQualityResponse, WeatherResponse } from "../types";

type AirPollutionColorType = "green" | "yellow" | "orange" | "red" | "purple";

export function AirPollution() {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [airQualityPollution, setAirQualityPollution] =
    useState<AirQualityResponse | null>(null);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [airPollutionColor, setAirPollutionColor] =
    useState<AirPollutionColorType>("green");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => {
          alert("Erro ao buscar localização");
        }
      );
    } else {
      alert("Geolocalização não é suportado pelo seu browser");
    }
  };

  const fetchAirQualiPollution = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process
          .env.NEXT_PUBLIC_OPENWEATHERMAP_API!}`
      );
      const data: AirQualityResponse = await response.json();
      setAirQualityPollution(data);
      const aqi: number = data.list[0].main.aqi;

      if (aqi > 51) {
        setAirPollutionColor("yellow");
      } else if (aqi > 101) {
        setAirPollutionColor("orange");
      } else if (aqi > 151) {
        setAirPollutionColor("red");
      } else if (aqi > 201) {
        setAirPollutionColor("purple");
      } else {
        setAirPollutionColor("green");
      }
    } catch (error) {
      alert("Não foi posssivel buscar dados de poluição");
    }
  };

  const fetchTemperature = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process
          .env.NEXT_PUBLIC_OPENWEATHERMAP_API!}`
      );
      const data: WeatherResponse = await response.json();
      setWeather(data);
    } catch (error) {
      alert("Não foi posssivel buscar dados de temperatura");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      fetchAirQualiPollution(latitude, longitude);
      fetchTemperature(latitude, longitude);
    }
  }, [latitude, longitude]);

  if (!weather && !airQualityPollution) {
    return <p>Loading...</p>;
  }

  // AQI Categoria	Descrição	Efeitos na Saúde
  // 0-50	   |  Bom	A qualidade do ar é considerada satisfatória.
  //               |	Nenhum efeito adverso esperado.
  // 51-100	 |  Regular	A qualidade do ar é aceitável, mas pode apresentar algum risco para pessoas sensíveis.
  //               | Pode causar efeitos em grupos sensíveis, como pessoas com doenças respiratórias.
  // 101-150 |	Insalubre	A qualidade do ar pode representar um risco para grupos sensíveis.
  //               | Pode causar problemas de saúde em pessoas sensíveis, mas não na maioria da população.
  // 151-200 |  Má	A qualidade do ar é considerada prejudicial para a saúde de todos.
  //               | Pode causar efeitos adversos na saúde para a maioria das pessoas, especialmente para grupos sensíveis.
  // 201-300 |  Muito Má	A qualidade do ar é muito prejudicial à saúde de todos.
  //               | Pode causar efeitos graves na saúde para todos, especialmente para grupos sensíveis.
  // 301-500 |	Perigoso	A qualidade do ar é extremamente prejudicial.
  //               | Pode causar sérios problemas de saúde para todos, e a saúde das pessoas pode ser afetada imediatamente.

  return (
    <div className="flex flex-col items-start gap-4 mobile:items-center">
      <div className="flex gap-4">
        <ThermometerIcon className="w-8 h-8" />
        <span className="text-xl font-roboto font-medium">
          {weather?.main.humidity}°C
        </span>
      </div>
      <div className="flex gap-4">
        <FilterIcon className="w-8 h-8" color={airPollutionColor} />
        <span className="text-xl font-roboto font-medium">
          Nível de Poluição AQI: {airQualityPollution?.list[0]?.main.aqi}
        </span>
      </div>
    </div>
  );
}
