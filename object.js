let o = new Object(),
    n = new Object(1),
    s = new Object('string'),
    b = new Object(true);

console.log(o.constructor === Object);
console.log(n.constructor === Number);
console.log(s.constructor === String);
console.log(b.constructor === Boolean);