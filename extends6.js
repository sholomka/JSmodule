function Parent(name) {
    this.name = name || 'Adamenko';
}

Parent.prototype.say = function() {
    return this.name;
};

function Child(name) {}

function inherit(C, P) {
    let F = function() {};
    F.prototype = P.prototype;
    C.prototype = new F();
    C.uber = P.prototype;
}

inherit(Child, Parent);
let kid = new Child();

console.dir(kid.uber);


