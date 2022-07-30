const APP_PREFIX = 'ClubQ';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION
const FILES_TO_CACHE = [
    "/",
    "./index.html",
    "./manifest.json",
    "./src"
];


self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Installing cache : ' + CACHE_NAME);
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// Respond with cached resources
self.addEventListener('fetch', function (e) {
    console.log('Fetch request : ' + e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (request) {
            if (request) { // if cache is available, respond with cache
                console.log('Responding with cache : ' + e.request.url);
                return request;
            } 
            else {       // if there are no cache, try fetching request
                console.log('File is not cached, fetching : ' + e.request.url);
                return fetch(e.request);
            }
        })
    );
});



// Delete outdated caches
self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then((keyList) => {
            // `keyList` contains all cache names under your username.github.io
            // filter out ones that has this app prefix to create keeplist
            let cacheKeeplist = keyList.filter(function (key) {
                return key.indexOf(APP_PREFIX);
            });
            // add current cache name to keeplist
            cacheKeeplist.push(CACHE_NAME);
            return Promise.all(keyList.map(function (key, i) {
                if (cacheKeeplist.indexOf(key) === -1) {
                    console.log('Deleting cache : ' + keyList[i] );
                    return caches.delete(keyList[i]);
                }
            }));
        })
    );
});

