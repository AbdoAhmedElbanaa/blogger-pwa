import type { Config } from './types';

export default {
  id: '/',
  name: 'البنا للمعلومات',
  shortName: 'ElbanaNet',
  description: 'عالمك نحو تقنيات حديثة وأساليب ومهارات جديدة كليًا في مجال الإنترنت.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#ea6f20',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'الصفحة الرئيسية ',
      shortName: 'Home',
      description: 'الصفحه الرئيسيسة',
      url: '/?utm_source=homescreen',
    },
    {
      name: 'أخر المقالات',
      shortName: 'Last Posts',
      description: 'تابع احدث المقالات ',
      url: '/search/?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: '4fb46e1f-0311-4d85-a91c-36f5532d973a',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.elbana.net/',
} satisfies Config;
