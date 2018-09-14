/*
Gestion du shell de l'application
- Shell : éléments statiques qui n'ont pas besoin de mises à jour régulières
*/
    const staticAssets = [
        './',
        './css/main.css',
        './js/main.js',
        './img/newsApp.jpg'
    ];
//


/*
Gestion du service worker (événement)
*/
    // Installation du service worker
    self.addEventListener('install', async event => {
        // Création d'un cache pour les données statiques (shell)
        const staticCache = await caches.open('static-assets');
        // Ajouter les données dans le cache static
        staticCache.addAll(staticAssets);
    });
//


/*
Définition des stratégies de gestion du cahce
*/
    const cachFirst = async request => {
        // Vérifier la présence de données dans le cache
        const cachedResponse = await caches.match(request);

        // Renvoyer le résultat : données du cache ou du serveur
        return cachedResponse || fetch(request);
    }
    
//


/*
Récupération des données depuis le service worker
*/
    self.addEventListener('fetch', event => {
        // Récupérer les données de la requête
        const request = event.request;

        // Récupération de l'URL de la requête
        const url = new URL(request.url);

        // Gestion de la stratégie de cache
        if( url.origin === location.origin ){
            //  Récupérer les données depuis le cache
            event.respondWith( cachFirst(request) );

        } else{
            // Récupérer les données depuis le server/api
            console.log('networkFirst');
        };
    })
//