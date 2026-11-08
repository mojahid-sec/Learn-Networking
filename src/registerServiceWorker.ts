// Service Worker Registration for NETCORE PWA
// Compatible with root hosting and GitHub Pages subpaths

export function registerServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', () => {
    // Determine the base path so registration works both at / and in /subpath/
    const swUrl = new URL('./sw.js', window.location.href).pathname;

    navigator.serviceWorker
      .register(swUrl, { scope: './' })
      .then((registration) => {
        console.log('[PWA] Service Worker registered successfully with scope:', registration.scope);

        // Check for updates
        registration.addEventListener('updatefound', () => {
          const installingWorker = registration.installing;
          if (!installingWorker) return;

          installingWorker.addEventListener('statechange', () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // New update available
                console.log('[PWA] New content is available; please refresh.');
                // Dispatch event so UI can show update notification if desired
                window.dispatchEvent(new CustomEvent('pwa-update-available'));
              } else {
                // Content cached for offline use
                console.log('[PWA] Content is cached for offline use.');
              }
            }
          });
        });
      })
      .catch((error) => {
        console.warn('[PWA] Service Worker registration failed:', error);
      });

    // Handle controller change (reloads automatically if instructed)
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        // Don't auto-reload unless user requested
      }
    });
  });
}
