/*
Variables
*/
    const apiLoadBtn = document.querySelector('#apiLoad');
    const sourceSelector = document.querySelector('#sourceSelector');
    const mainSection = document.querySelector('main');

    const apiKey = `558b63db8d7d46e8934c954fbd98bd3f`;
    let country = `fr`;
    let defaultSource = `vice-news`;
    const noImage = `https://bit.ly/2oH8mPL`;
//

/*
Méthodes
*/
    // Créer une fonction pour récupérer le top article
    const getSources = async ( language = country ) => {
        // Contacter l'API
        const apiResponse = await fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`);

        // Retour API => OK, transformation au format json
        const jsonResponse = await apiResponse.json();

        // Modifier le DOM
        displaySources( jsonResponse.sources );


        // Contacter l'API (déclinaison)
        // fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`)

        // // Retour API => OK, transformation au format json
        // .then( apiResponse => apiResponse.json() )

        // // Retour JSON => OK
        // .then( apiJson => displaySources( apiJson.sources ) )

        // // Retour API => error
        // .catch( apiResponse => {
        //     console.error(apiResponse);
        // });
    };



    // Créer une fonction pour charger la liste des articles
    const getArticles = async (source = defaultSource) => {
        // Contacter l'API
        const apiResponse = await fetch(`https://newsapi.org/v2/everything?sources=${source}&language=${country}&apiKey=${apiKey}`);

        // Récuprer les données de l'API au format JSON
        const jsonResponse = await apiResponse.json();

        // Collection de données
        const dataArray = jsonResponse.articles;

        // Modifier le DOM
        if( dataArray.length > 0 ){
            mainSection.innerHTML = dataArray.map(displayArticle).join('\n');

        } else{
            mainSection.innerHTML = `<p>Aucun article...</p>`;
        };        
    };


    // Créer une fonction pour afficher la liste d'articles
    const displayArticle = item => {
        return `
            <article>
                <h2>${item.title}</h2>
                <img src="${item.urlToImage || noImage }">
                <p>${item.description}</p>
                <a href="${item.url}" target="_blank">Lire la suite</a>
            </article>
        `;
    };



    // Créer une fonction pour afficher les sources dans le DOM
    const displaySources = data => {
        // Boucle sur une collection de données
        for( let item of data ){
            sourceSelector.innerHTML += `<option value="${item.id}">${item.name}</option>`
        };
    }
//



/*
Lancer l'application
*/
    window.addEventListener( 'load', async () => {
        // Charger le contenu
        await getSources();
        await getArticles();

        // Sélectionner la source par défaut
        sourceSelector.value = defaultSource;

        // Capter le changement du select
        sourceSelector.addEventListener( 'change', event => {
            // Charger la liste d'articles
            getArticles(event.target.value);
        })

        // Instancier le service worker
        if( 'serviceWorker' in navigator ){
            try {
                navigator.serviceWorker.register('service-worker.js');
                console.log('ServiceWorker registrated');
                
            } catch (error) {
                console.log(error);
                console.error('ServiceWorker registration failed...');
            };
        };
    });
//