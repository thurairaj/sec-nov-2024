'use client';

import { useLocation } from '@/context/LocationProvider';
import { useEffect } from 'react';
import Loader from '@/component/Loader';
import { useWeather } from '@/context/WeatherProvider';

export default function TemperaturePage(props) {
  const { location } = useLocation();
  const { current, hourly, isLoading } = useWeather();

  useEffect(() => {}, [location]);

  return (
    <div>
      <Loader isLoading={isLoading}>
        <h1 className="display-1 text-center">{current.temperature}</h1>
        <p>{hourly.temperature.join(',')}</p>
      </Loader>
    </div>
  );
}
