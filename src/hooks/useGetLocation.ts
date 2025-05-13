import { useEffect, useState } from 'react';
import { useGeolocated } from 'react-geolocated';
import { secureStorage } from '@/utils';
import { type IGeolocation, LOCAL_STORAGE_KEYS } from '@/types';

export const useGetLocation = () => {
  const { setLocalItem } = secureStorage();
  const [location, setLocation] = useState<IGeolocation | null>(null);
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 15000,
  });

  useEffect(() => {
    if (!coords) return;
    const checkIfRussian = async (lat: number, lng: number) => {
      try {
        // Using OpenStreetMap Nominatim (free but requires attribution)
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
        );
        const data: IGeolocation = await response.json();
        setLocalItem(LOCAL_STORAGE_KEYS.user_location, data);
        setLocation(data);
      } catch {
        setLocation(null);
      }
    };
    checkIfRussian(coords.latitude, coords.longitude);
  }, [coords]);

  return location;
};
