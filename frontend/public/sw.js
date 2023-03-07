let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
 
        "https://www.jqueryscript.net/css/jquerysctipttop.css",
        "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.5.0/flatly/bootstrap.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.4-beta.33/jquery.inputmask.min.js",
        "http://www.google-analytics.com/ga.js",
        "https://jquery.app/jqueryscripttop.css",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",  
        "https://fonts.googleapis.com/css?family=Lato:400,700,400italic&display=swap",
        "https://fonts.gstatic.com/s/sourcesanspro/v21/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
        "https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500,600,700|Source+Sans+Pro:400,600,700&display=swap",
        "/static/js/bundle.js",
        "/assets/responsive.css",
        "/assets/flipper.min.js",
        "/assets/main.css",
        "/assets/main.js",
        "/favicon.ico",
        "/ws"

      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
    
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});
