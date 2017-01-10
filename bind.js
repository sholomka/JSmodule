let one = {
    name: 'object',
    say: function(greet) {
        return `${greet} ${this.name}`;
    }
};

let two = {
    name: 'anotherobject',
};



if (typeof Function.prototype.bind === 'function') {


    Function.prototype.bind = function(thisArg) {

        let fn = this,
            slice = [].slice,
            args = slice.call(arguments, 1);

        return function() {
            return fn.apply(thisArg, args.concat(slice.call(arguments)))
        };


    };


    let twosay = one.say.bind(two, 'ooo');
    console.log(twosay('111'));
}

