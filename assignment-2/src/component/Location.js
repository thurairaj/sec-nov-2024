'use client';

import { useLocation } from '@/context/LocationProvider';
import { useState } from 'react';

export default function Location({ props }) {
  const { location, setLocation } = useLocation();
  const [latitude, setLatitude] = useState(location.lat);
  const [longitude, setLongitude] = useState(location.lng);

  const clickHandler = () => {
    setLocation({ lat: latitude, lng: longitude });
  };

  return (
    <div className="row mt-2">
      <div className="col flex-grow-1">
        <label htmlFor="latitude" className="form-label">
          Latitude
        </label>
        <input
          id="latitude"
          type={'text'}
          value={latitude}
          className={'form-control'}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </div>
      <div className="col">
        <label htmlFor="longitude" className="form-label">
          Longitude
        </label>
        <input
          id={'longitude'}
          type={'text'}
          className={'form-control'}
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </div>
      <div className="col flex-grow-0 align-bottom align-self-end">
        <button
          type="submit"
          className={'btn btn-primary'}
          onClick={clickHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}
