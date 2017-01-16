function CarMaker(){}

CarMaker.prototype.drive = function() {
  return `doors: ${this.doors}`;
};


CarMaker.factory = function(constr) {
    if (typeof CarMaker[constr] !== 'function') {
        throw {
            name: 'Error',
            message: `${constr} doesn't exists`
        }
    }

    if (typeof CarMaker[constr].prototype.drive !== 'function') {
        CarMaker[constr].prototype = new CarMaker();
    }

    return new CarMaker[constr]();
};


CarMaker.Compact = function() {
    this.doors = 5;
};

CarMaker.Convertible = function() {
    this.doors = 15;
};

CarMaker.SUV = function() {
    this.doors = 25;
};


let corolla = CarMaker.factory('Compact');
let bmw = CarMaker.factory('Convertible');
let mersedes = CarMaker.factory('SUV');

// console.log(corolla.drive());
// console.log(mersedes.drive());
// console.log(bmw.drive());