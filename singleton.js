'use strict';

function Universe() {
    if (typeof Universe.instance === 'object') {
        return Universe.instance;
    }

    this.start = 0;
    this.bang = 'Big';

    Universe.instance = this;
}


let uni1 = new Universe();
let uni2 = new Universe();


console.log(uni1);
console.log(uni2);
console.log(uni2 === uni1);
