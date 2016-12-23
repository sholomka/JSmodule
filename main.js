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

console.log(MYAPP.namespace('MYAPP.modules.module2'));

