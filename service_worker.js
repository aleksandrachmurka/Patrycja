self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open("patrycja-show-v1")
      .then(function (cache) {
        return cache.addAll([
          "./",
          "./index.html",
          "./index.js",
          "./css/style.css",
          "./images/for_web/black_dress.jpg",
          "./images/for_web/favicon.png",
          "./images/for_web/logo-dancer.png",
          "./images/for_web/star.jpg",
          "./images/for_web/star_floor.jpg",
          "./images/for_web/violet_fur-small.jpg",
          "./images/for_web/violet_wall.jpg",
          "./images/for_web/gallery/1.jpg",
          "./images/for_web/gallery/2.jpg",
          "./images/for_web/gallery/3.jpg",
          "./images/for_web/gallery/4.jpg",
          "./images/for_web/gallery/5.jpg",
          "./images/for_web/gallery/6.jpg",
          "./images/for_web/gallery/7.jpg",
          "./images/for_web/gallery/8.jpg",
          "./images/for_web/gallery/9.jpg",
          "./images/for_web/gallery/10.jpg",
          "./images/for_web/gallery/11.jpg",
          "./images/for_web/gallery/12.jpg",
          "./images/for_web/gallery/13.jpg",
          "./images/for_web/gallery/14.jpg",
          "./images/for_web/gallery/15.jpg",
          "./images/for_web/gallery/16.jpg",
          "./images/for_web/gallery/17.jpg",
          "./images/for_web/gallery/18.jpg",
          "./images/for_web/gallery/19.jpg",
          "./images/for_web/gallery/20.jpg",
          "./images/for_web/gallery/21.jpg",
          "./images/for_web/gallery/22.jpg",
          "./images/for_web/gallery/23.jpg",
          "./images/for_web/gallery/24.jpg",
          "./images/for_web/gallery/25.jpg",
          "./images/for_web/gallery/26.jpg",
          "./images/for_web/gallery/27.jpg",
          "./images/for_web/gallery/28.jpg",
          "./images/for_web/gallery/29.jpg",
          "./images/for_web/gallery/30.jpg",
          "./images/for_web/gallery/31.jpg",
          "./images/for_web/gallery/32.jpg",
          "./images/for_web/gallery/33.jpg",
          "./images/for_web/gallery/34.jpg",
          "./images/for_web/gallery/35.jpg",
          "./images/for_web/gallery/36.jpg",
          "./images/for_web/gallery/37.jpg",
          "./images/for_web/gallery/38.jpg"
        ]);
      })
      .catch(function (err) {
        console.log(err);
      })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
