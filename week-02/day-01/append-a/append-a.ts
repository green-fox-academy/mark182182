'use strict';
export { };

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals = Array("koal", "pand", "zebr");
let animalsNew = animals.map(x => x += 'a');
console.log(animalsNew);