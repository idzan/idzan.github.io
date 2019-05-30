self.addEventListener("install", function(event) {
    event.waitUntil(preLoad());
});

var preLoad = function () {
    console.log("Installing PWA");
    return caches.open("offline").then(function(cache) {
        console.log("Caching files for usage in Offline mode");
        return cache.addAll(["/assets/css", "/contact", "/about", "/portfolio", "/", "/terms", "/policy", "/cookies", "/project", "/offline.html", "/assets/img", "/assets/js", "/assets/img/social", "/assets/img/icons", "/assets/img/logos", "/assets/img/projects"]);
    });
};

self.addEventListener("fetch", function(event) {
    event.respondWith(checkResponse(event.request).catch(function() {
        return returnFromCache(event.request);
    }));
    event.waitUntil(addToCache(event.request));
});

var checkResponse = function(request) {
    return new Promise(function(fulfill, reject) {
        fetch(request).then(function(response) {
            if(response.status !== 404) {
                fulfill(response);
            } else {
                reject();
            }
        }, reject);
    });
};

var addToCache = function(request) {
    return caches.open("offline").then(function (cache) {
        return fetch(request).then(function (response) {
            console.log(response.url + "  was cached");
            return cache.put(request, response);
        });
    });
};

var returnFromCache = function(request) {
    return caches.open("offline").then(function (cache) {
        return cache.match(request).then(function (matching) {
            if (!matching || matching.status == 404) {
                return cache.match("offline.html");
            } else {
                return matching;
            }
        });
    });
};