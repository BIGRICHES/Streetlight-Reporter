// Service Worker for MGMLightOut PWA
// Minimal implementation - required for "Add to Home Screen" functionality
// No offline caching since app relies heavily on Firebase database

const CACHE_NAME = 'mgmlightout-v1';

// Install event
self.addEventListener('install', (event) => {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  // Claim all clients immediately
  self.clients.claim();
});

// Fetch event - just pass through to network (no caching)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
