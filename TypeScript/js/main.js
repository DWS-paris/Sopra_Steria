/*
Type une variable basique
*/
var userName;
var userAge;
userName = "Julien";
userAge = "39";
//
/*
Typer un tableau
*/
var skills;
skills = ["JS", "CSS", 42];
//
/*
Typer une fonction
*/
var userInfo = function (param) {
    var userAge = 2018 - param;
    return "Vous avez " + userAge;
};
console.log(userInfo(1979));
;
var julienNoyer = {
    age: 39,
    firstName: 'Julien',
    isCool: true,
    lastName: 'Noyer',
    skills: ["JS", "CSS", "MEAN"]
};
//
/*
Typer une class
*/
var MyUsers = /** @class */ (function () {
    function MyUsers(name, age) {
        var _this = this;
        this.totalUsers = 0;
        this.addUser = function () {
            _this.totalUsers++;
            console.log(_this.totalUsers);
        };
        this.name = name;
        this.age = age;
        this.addUser();
    }
    Object.defineProperty(MyUsers.prototype, "changeMe", {
        get: function () { return MyUsers._changeMe; },
        set: function (pseudo) { MyUsers._changeMe = pseudo; },
        enumerable: true,
        configurable: true
    });
    MyUsers._changeMe = "AZERTYUIOP";
    return MyUsers;
}());
var chuck = new MyUsers('Chuck Norris', 500);
console.log(MyUsers._changeMe);
chuck.changeMe = 'Julien Noyer';
console.log(chuck);
console.log(MyUsers._changeMe);
//
