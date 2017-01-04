let Gadget = function(price) {
    this.price = price;
};

Gadget.isShiny = function() {
    let msg = 'you bet';

    if (this instanceof Gadget) {
        msg += ' costs ' + this.price;
    }

    return msg;
};


Gadget.prototype.isShiny = function() {
  return Gadget.isShiny.call(this);
};

console.log(Gadget.isShiny());
let a = new Gadget(500);
console.log(a.isShiny());



