function Parent(name) {
    this.name = name || 'Adamenko';
}

Parent.prototype.say = function() {
    return this.name;
};

function Child(name) {}

function inherit(C, P) {
    C.prototype = P.prototype;
}

inherit(Child, Parent);
let kid = new Child();

console.dir(kid);

