const PRECACHE = 'precache';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [''];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', (event) => {
	self.skipWaiting();
	/* event.waitUntil(
		caches
			.open(RUNTIME)
			.then((cache) => cache.addAll(PRECACHE_URLS))
			.then(self.skipWaiting())
	); */
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', (event) => {
	const currentCaches = [PRECACHE];
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
			})
			.then((cachesToDelete) => {
				return Promise.all(
					cachesToDelete.map((cacheToDelete) => {
						return caches.delete(cacheToDelete);
					})
				);
			})
			.then(() => self.clients.claim())
	);
});

self.addEventListener('fetch', (event) => {
	let url = new URL(event.request.url);
	let isRoot = url.pathname === '/' || url.pathname === '/acores' || url.pathname === '/madeira';
	if (event.request.url.startsWith(self.location.origin) && event.request.url.match('/') && event.request.method === 'GET') {
		event.respondWith(
			caches.match(event.request).then((cachedResponse) => {
				if (cachedResponse && !isRoot) {
					console.log('sw', 'cached', event.request.url);
					return cachedResponse;
				}

				return caches.open(isRoot ? PRECACHE : RUNTIME).then((cache) => {
					return fetch(event.request).then((response) => {
						return cache.put(event.request, response.clone()).then(() => {
							return response;
						});
					});
				});
			})
		);
	}
});
