function Parent(name) {
    this.name = name || 'Adamenko';
}

Parent.prototype.say = function() {
    return this.name;
};

function Child(name) {}

let inherit = (function () {
    let F = function() {};

    return function(C, P) {
        F.prototype = P.prototype;
        C.prototype = new F();
        C.uber = P.prototype;
        C.prototype.constructor = C;
    }

}());

inherit(Child, Parent);
let kid = new Child();

console.dir(kid);



