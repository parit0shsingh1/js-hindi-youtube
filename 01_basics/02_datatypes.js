/*javascript has been changing for a long time, but we want our code to adhere ot the latets standards of the js and that is why we type "use strict"(a good practice but is by default implemented these days)*/

"use strict" //treat all code as newer version

//alert(3+3) //implementable in browser but not in nodejs as browser imlementation is document embedded implementation and nodejs is indepemndent impementation

let name= "Paritosh" //string
let age = 22 //number
let isEdited = true //boolean

/*
    following are the datatypes in javscript:
    -Number => range: 2^53
    -bigint =>gives more ange tha number
    -string
    -boolean =>true/false
    -null => standalone value often referred to as an object
    -undefined=>special type
    -symbol=> used to define uniqueness


    we use typeof to get the type of datatypes
*/
console.log(typeof name);//string
console.log(typeof age);//number
console.log(typeof null);//object
console.log(typeof undefined);//undefined





