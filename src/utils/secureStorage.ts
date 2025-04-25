'use client';
import { LOCAL_STORAGE_KEYS, SESSION_STORAGE_KEYS } from '@/types';
import * as CryptoJS from 'crypto-js';

const secretKey = process.env.SECRET_KEY || 'secretkey';

export const secureStorage = () => {
  const encryptData = (data: any): string => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  };

  const decryptData = <T>(ciphertext: string): T | null => {
    try {
      const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedData ? (JSON.parse(decryptedData) as T) : null;
    } catch (error) {
      console.error('Decryption failed:', error);
      return null;
    }
  };

  const getLocalItem = <T = string>(key: LOCAL_STORAGE_KEYS): T | null => {
    const encryptedData = localStorage.getItem(key);

    return encryptedData ? decryptData<T>(encryptedData) : null;
  };

  const setLocalItem = (key: LOCAL_STORAGE_KEYS, value: any): void => {
    const encryptedData = encryptData(value);
    localStorage.setItem(key, encryptedData);
  };

  const removeLocalItem = (keys?: LOCAL_STORAGE_KEYS | LOCAL_STORAGE_KEYS[]) => {
    if (!keys) {
      return localStorage.clear();
    }
    if (Array.isArray(keys)) {
      keys.forEach((key) => localStorage.removeItem(key));
    } else localStorage.removeItem(keys);
  };

  const getSessionItem = <T = string>(key: SESSION_STORAGE_KEYS): T | null => {
    const encryptedData = sessionStorage.getItem(key);
    return encryptedData ? decryptData<T>(encryptedData) : null;
  };

  const setSessionItem = (key: SESSION_STORAGE_KEYS, value: any): void => {
    const encryptedData = encryptData(value);
    sessionStorage.setItem(key, encryptedData);
  };

  const removeSessionItem = (keys?: SESSION_STORAGE_KEYS | SESSION_STORAGE_KEYS[]) => {
    if (!keys) {
      return sessionStorage.clear();
    }
    if (Array.isArray(keys)) {
      keys.forEach((key) => sessionStorage.removeItem(key));
    } else sessionStorage.removeItem(keys);
  };

  return {
    getLocalItem,
    setLocalItem,
    removeLocalItem,
    getSessionItem,
    setSessionItem,
    removeSessionItem,
  };
};
