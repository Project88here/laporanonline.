const CACHE_NAME = 'report-cache';
const urlsToCache = [
    '/',
    '/data.json',
    '/style.css'
];

// Instalasi Service Worker dan penyimpanan file ke dalam cache
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Mengambil data dari cache jika offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});