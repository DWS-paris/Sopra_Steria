/*
Gestion du shell de l'application
- Shell : éléments statiques qui n'ont pas besoin de mises à jour régulières
*/
const staticAssets = [
    './',
    './*',
    './assets/*',
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
};

const networkFirst = async request => {
    // Création d'un cahe pour les données dynamiques
    const dynamicCache = await caches.open('dynamic-assets');

    // Récupération des données depuis le serveur/api
    try {
        // Ajouter les données dans le cache dynamique
        const response = await fetch(request);
        dynamicCache.put( request, response.clone() );

        // Renvoyer la réponse
        return response;

    } catch (error) {
        // Récupérer les donnes du cache dynamiqiue
        const cachedResponse = await dynamicCache.match(request);

        // Renvoyer les données du cache dynamique
        return cachedResponse || await caches.match('test');
    }
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
        //  Récupérer les données en priorité depuis le cache
        event.respondWith( cachFirst(request) );

    } else{
        // Récupérer les données en priorité depuis le serveur/api
        event.respondWith( networkFirst(request) );
    };
})
//