let MYAPP = {};

MYAPP.namespace = (nsString) => {
    let parts = nsString.split('.'),
        parent = MYAPP,
        i;

    if (parts[0] === 'MYAPP') {
        parts = parts.slice(1);
    }


    for (i = 0; i < parts.length; i++) {
       if (typeof parent[parts[i]] === 'undefined') {
           parent[parts[i]] = {}
       }
        parent = parent[parts[i]];
    }

    return parent;
};

MYAPP.namespace('MYAPP.utilities.array');


MYAPP.utilities.array = (function(global) {

    console.log(global);

    let arrayString = '[object Array]',
        ops = Object.prototype.toString,

        inArray = (haystack, needle) => {
            for (let i = 0, max = haystack.length; i < max; i++) {
                if (haystack[i] == needle) {
                    return i;
                }
            }

            return -1;
        };

        isArray = (a) => {
            return ops.call(a) === arrayString;
        };

        return {
            isArray: isArray,
            indexOf: inArray
        }
}(this));


console.log(MYAPP.utilities.array.indexOf(['red', 'green'], 'green2'));
