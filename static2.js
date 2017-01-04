let Gadget = (function() {
    let counter = 0,
        NewGadget;
    NewGadget =  function() {
        console.log(++counter);
    };

    NewGadget.prototype.getLastId = function() {
        return counter;
    };

    return NewGadget;
}());


let g1 = new Gadget();
g1.getLastId();

let g2 = new Gadget();
g2.getLastId();
let g3 = new Gadget();
g3.getLastId();