'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from '@/context/LocationProvider';

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const { location } = useLocation();
  const [current, setCurrent] = useState({
    temperature: 0,
    wind: 0,
    precipitation: 0,
  });
  const [hourly, setHourly] = useState({
    temperature: [],
    wind: [],
    precipitation: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Do axios call!
    setIsLoading(true);
    setIsLoading(false);
  }, [location]);

  return (
    <WeatherContext.Provider value={{ current, hourly, isLoading }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
