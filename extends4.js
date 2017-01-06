function Parent(name) {
    this.name = name || 'Adamenko';
}

Parent.prototype.say = function() {
    return this.name;
};


function Child(name) {
    Parent.apply(this, arguments);
}

Child.prototype = new Parent();


let kid = new Child('Patrick');
console.log(kid.name);
console.log(kid.say());

delete kid.name;

console.log(kid.say());
