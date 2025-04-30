'use client';

import { FC, useEffect } from 'react';

const ServiceWorkerRegister: FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          // console.log('Service Worker registered:', registration);
        })
        .catch((err) => {
          // console.error('Service Worker registration failed:', err);
        });
    }
  }, []);
  return null;
};

export default ServiceWorkerRegister;
