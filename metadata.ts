/**
 * This is auto generated metadata file, generated at: Wed Feb 12 2025 23:51:30 GMT+0000 (Coordinated Universal Time)
 * Prevent making any changes here
 */

export interface Metadata {
  github: {
    repository: string;
    branch: string;
  };
  pwa: {
    logs: boolean;
    oneSignalEnabled: boolean;
    oneSignalSDK: string;
    oneSignalConfig: {
      appId: string;
      allowLocalhostAsSecureOrigin: boolean;
    };
    serviceWorker: {
      source: string;
      scope: string;
    };
  };
  build: {
    hash: string;
  };
}

export const metadata = JSON.parse(
  '{"github":{"repository":"AbdoAhmedElbanaa/blogger-pwa","branch":"main"},"pwa":{"oneSignalEnabled":true,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"4fb46e1f-0311-4d85-a91c-36f5532d973a","allowLocalhostAsSecureOrigin":true},"logs":true,"serviceWorker":{"source":"/app/serviceworker.js","scope":"/"}},"build":{"hash":"gluSLSkmH0Y61vIcWRBHz"}}',
) as Metadata;
