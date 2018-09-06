/*
Type une variable basique
*/
    let userName: string;
    let userAge: number | string;

    userName = `Julien`;
    userAge = `39`;
//



/*
Typer un tableau
*/
    let skills: Array<string | number>;
    skills = [`JS`, `CSS`, 42];
//



/*
Typer une fonction
*/
    const userInfo = ( param: number ): string => {

        const userAge = 2018 - param;

        return `Vous avez ${userAge}`;
    }

    console.log( userInfo(1979) );
//



/*
Typer un objet
*/
    interface User {
        firstName: string,
        lastName: string,
        age: number,
        skills: Array<string>,
        isCool: boolean
    };

    const julienNoyer: User = {
        age: 39,
        firstName: 'Julien',
        isCool: true,
        lastName: 'Noyer',
        skills: [ `JS`, `CSS`, `MEAN` ]
    };
//


/*
Typer une class
*/
    class MyUsers {

        public name: string;
        public age: number;

        private totalUsers: number = 0;

        static _changeMe: string = `AZERTYUIOP`

        constructor( name: string, age: number ){
            this.name = name;
            this.age = age;

            this.addUser();
        }

        public addUser = (): void => {
            this.totalUsers++;

            console.log(this.totalUsers);
        }

        get changeMe(): string { return MyUsers._changeMe }
        set changeMe(pseudo: string){ MyUsers._changeMe = pseudo }
    }

    const chuck = new MyUsers('Chuck Norris', 500);

    console.log(MyUsers._changeMe);
    
    chuck.changeMe = 'Julien Noyer'

    console.log(chuck)
    console.log(MyUsers._changeMe);
//