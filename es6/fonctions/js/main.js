/*
Déclarer une fonction en ES5
*/
    function twice_1(){
        // ...
    };

    var twice_2 = function(){
        // ...
    };
//

/*
Déclarer une fonction en ES6
*/
    const twice = ( param ) => {
        return param * 2;
    };

    console.log( twice(2) );
//

/*
Fonction avec paramêtre optionnel
*/
    const sayHello = ( param = `Paul` ) => {
        return `Hello ${param}`;
    };

    console.log( sayHello() );
    console.log( sayHello(`John`) );
//

/*
Factorisation : fonction avec un paramêtre et un retour
*/
    const isHappy = param => param === 1 ? `Is happy !` : `Is not happy !`;

    console.log( isHappy(1) );
    console.log( isHappy(0) );
//

/*
Paramêtre du reste (Rest parameter)
*/
    const helloUser = ( firstName, lastName, ...skills ) => {
        console.log(`Hello ${firstName} ${lastName}`);

        // Les paramêtres du reste sont contenus dans un tableau
        for( let item of skills ){
            console.log(item);
        };
    };

    helloUser( `Ringo`, `Staar`, `JS`, `CSS`, `MEAN` );
//

/*
Spread operator
*/
    let skills = [ `JS`, `CSS`, `MEAN` ];
    let softSkills = [ `Bonne humeur`, `Levée de coude` ];

    let allSkills = [ ...skills, ...softSkills ];

    console.log(allSkills);
//