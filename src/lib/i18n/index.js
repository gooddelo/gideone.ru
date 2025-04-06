import { browser } from '$app/environment';
import { init, register, locale, getLocaleFromNavigator, _ } from 'svelte-i18n';

// Register the locales
register('en', () => import('./locales/en.json'));
register('ru', () => import('./locales/ru.json'));

// Function to check if user is from CIS (Commonwealth of Independent States)
// CIS includes: Russia, Belarus, Ukraine, Kazakhstan, Kyrgyzstan, Uzbekistan, 
// Tajikistan, Azerbaijan, Armenia, Moldova, and Georgia (which left but is included here)
function isUserFromCIS() {
  if (!browser) return false;
  
  try {
    // Get user's browser language
    const navLang = navigator.language || navigator.userLanguage || '';
    const langCode = navLang.split('-')[0].toLowerCase();
    
    // Check if user's language is Russian or other CIS languages
    const cisLanguages = ['ru', 'be', 'uk', 'kk', 'ky', 'uz', 'tg', 'az', 'hy', 'ka'];
    
    if (cisLanguages.includes(langCode)) {
      return true;
    }
    
    // Alternatively, check if user's timezone is in CIS region
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const cisTimezones = [
      'Europe/Moscow', 'Europe/Minsk', 'Europe/Kyiv', 'Asia/Almaty', 
      'Asia/Baku', 'Asia/Yerevan', 'Asia/Tbilisi', 'Asia/Tashkent', 
      'Asia/Dushanbe', 'Asia/Bishkek', 'Europe/Chisinau',
      // Additional Russian timezones
      'Europe/Kaliningrad', 'Europe/Samara', 'Europe/Volgograd', 
      'Asia/Yekaterinburg', 'Asia/Omsk', 'Asia/Novosibirsk', 
      'Asia/Krasnoyarsk', 'Asia/Irkutsk', 'Asia/Yakutsk', 
      'Asia/Vladivostok', 'Asia/Magadan', 'Asia/Kamchatka', 'Asia/Anadyr'
    ];
    
    if (cisTimezones.includes(timezone)) {
      return true;
    }
  } catch (error) {
    console.error('Error detecting user region:', error);
    // In case of error, default to non-CIS for safety
    return false;
  }
  
  return false;
}

// Initialize the i18n library
export function setupI18n() {
  try {
    // Set locale based on user's region - Russian for CIS, English for others
    const userLocale = browser ? (isUserFromCIS() ? 'ru' : 'en') : 'ru';
    
    // If there's a saved locale in localStorage, use that instead
    const savedLocale = browser && localStorage ? localStorage.getItem('locale') : null;
    const initialLocale = savedLocale || userLocale;
    
    init({
      fallbackLocale: 'ru',
      initialLocale
    });
    
    // Save the selected locale to localStorage when it changes
    if (browser && localStorage) {
      locale.subscribe((value) => {
        if (value) {
          localStorage.setItem('locale', value);
        }
      });
    }
  } catch (error) {
    console.error('Error setting up i18n:', error);
    // Fallback to default initialization
    init({
      fallbackLocale: 'ru',
      initialLocale: 'ru'
    });
  }
}

// Export the underscore function for ease of use in components
export { _, locale }; 