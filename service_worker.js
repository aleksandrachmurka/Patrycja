self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('patrycja-show-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/js/main.js',
        '/images/for_web/black_dress.jpg',
        '/images/for_web/favicon.png',
        '/images/for_web/logo-dancer.png',
        '/images/for_web/star.jpg',
        '/images/for_web/star_floor.jpg',
        '/images/for_web/violet_fur-small.jpg',
        '/images/for_web/violet_wall.jpg',
        '/images/for_web/1.jpg',
        '/images/for_web/2.jpg',
        '/images/for_web/3.jpg',
        '/images/for_web/4.jpg',
        '/images/for_web/5.jpg',
        '/images/for_web/6.jpg',
        '/images/for_web/7.jpg',
        '/images/for_web/8.jpg',
        '/images/for_web/9.jpg',
        '/images/for_web/10.jpg',
        '/images/for_web/11.jpg',
        '/images/for_web/12.jpg',
        '/images/for_web/13.jpg',
        '/images/for_web/14.jpg',
        '/images/for_web/15.jpg',
        '/images/for_web/16.jpg',
        '/images/for_web/17.jpg',
        '/images/for_web/18.jpg',
      ]);
    }).catch(function(err) {
              console.log(err);
            })
      );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});