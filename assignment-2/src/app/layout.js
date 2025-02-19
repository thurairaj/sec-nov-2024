'use client';

import './globals.css';
import { LocationProvider } from '@/context/LocationProvider';
import Location from '@/component/Location';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WeatherProvider } from '@/context/WeatherProvider';
import Navigation from '@/component/Navigation';

export default function RootLayout({ children }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  });

  return (
    <html lang="en">
      <body className={'container'}>
        <Navigation></Navigation>
        <LocationProvider>
          <WeatherProvider>
            <Location></Location>
            {children}
          </WeatherProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
