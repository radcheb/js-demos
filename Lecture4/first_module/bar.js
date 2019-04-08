var foo = require('./foo');
foo();                      //CASE 1: Hi from foo!
require('./foo')();         //CASE 2: Hi from foo!
console.log(foo);           //CASE 3: [Function]
console.log(foo.toString());//CASE 4: function () {console.log("Hi from foo!");}
console.log(fooA);          //CASE 5: ReferenceError
console.log(module.exports);//CASE 6: {}
