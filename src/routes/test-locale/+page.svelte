<script>
  import { onMount } from 'svelte';
  import { _, locale } from '$lib/i18n';
  
  let navigatorLanguage = '';
  let userTimezone = '';
  let isCISDetected = false;
  
  onMount(() => {
    navigatorLanguage = navigator.language || navigator.userLanguage || 'unknown';
    
    try {
      userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown';
    } catch (error) {
      userTimezone = 'Error detecting timezone';
    }
    
    // Check if CIS - simplified version of isUserFromCIS() for demonstration
    const langCode = navigatorLanguage.split('-')[0].toLowerCase();
    const cisLanguages = ['ru', 'be', 'uk', 'kk', 'ky', 'uz', 'tg', 'az', 'hy', 'ka'];
    const cisTimezones = [
      'Europe/Moscow', 'Europe/Minsk', 'Europe/Kyiv', 'Asia/Almaty', 
      'Asia/Baku', 'Asia/Yerevan', 'Asia/Tbilisi', 'Asia/Tashkent', 
      'Asia/Dushanbe', 'Asia/Bishkek', 'Europe/Chisinau'
    ];
    
    isCISDetected = cisLanguages.includes(langCode) || cisTimezones.includes(userTimezone);
  });
</script>

<div class="locale-test">
  <h1>Locale Test Page</h1>
  
  <div class="info-panel">
    <h2>Current Settings</h2>
    <ul>
      <li><strong>Current Locale:</strong> {$locale}</li>
      <li><strong>Browser Language:</strong> {navigatorLanguage}</li>
      <li><strong>Timezone:</strong> {userTimezone}</li>
      <li><strong>Detected as CIS:</strong> {isCISDetected ? 'Yes' : 'No'}</li>
    </ul>
  </div>
  
  <div class="language-buttons">
    <h2>Switch Language</h2>
    <div class="buttons">
      <button on:click={() => $locale = 'ru'} class:active={$locale === 'ru'}>
        Russian
      </button>
      <button on:click={() => $locale = 'en'} class:active={$locale === 'en'}>
        English
      </button>
    </div>
  </div>
  
  <div class="translated-content">
    <h2>Translated Content</h2>
    <p>{$_('common.title')}</p>
    <p>{$_('common.description')}</p>
    <p>{$_('nav.home')}</p>
    <p>{$_('nav.services')}</p>
  </div>
</div>

<style>
  .locale-test {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .info-panel, .language-buttons, .translated-content {
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .buttons {
    display: flex;
    gap: 1rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button.active {
    background-color: #6c60ef;
    color: white;
  }
  
  h1, h2 {
    margin-top: 0;
  }
  
  ul {
    padding-left: 1.5rem;
  }
</style> 