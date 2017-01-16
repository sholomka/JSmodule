let Universe;

(function() {
    let instance;

    Universe = function() {
        if (instance) {
            return instance;
        }

        instance = this;

        this.start = 0;
        this.big = 'Bang';
    }
}());



let uni1 = new Universe();
let uni2 = new Universe();


console.log(uni1 === uni2);
console.log(uni1);
console.log(uni2);
console.log(instance);