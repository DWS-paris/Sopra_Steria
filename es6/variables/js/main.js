/*
Déclaration de variables
*/
    // Version ES5
    // var userName = 'Julien';

    // Version ES6
    let userName = `Julien`;
    const birthDate = 1979;
//

/*
Templating ES6
*/
    // Version ES5
    // console.log( "Bonjour " + userName + " !" );

    // Version ES6
    console.log( `
        Bonjour ${userName} !
    ` );
//

/*
Sélectionner une balise du DOM (ES5/ES6/ES...)
*/
    // Sélectionner
    let myTitle = document.querySelector(`#title`);
    let userMessage = document.querySelector(`.message`);

    // Modifier le texte
    myTitle.textContent = `Bonjour ${userName} !`;

    // Modifier le HTML
    myTitle.innerHTML = `Bonjour <i>${userName}</i> !`;

    userMessage.textContent = `
        Vous avez ${ 2018 - birthDate } ans, bravo !
    `
//