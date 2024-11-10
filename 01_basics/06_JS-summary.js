//Interview prep for javascript
//according to how the data is ket and treated in the memory we have two major types of data
/*
1. Primitive/Value Datatypes:
    string, number, boolean, null, undefined, symbol, BigInt 

2. Reference/Non-Primitive Datatypes:
    array, objects, functions

Some examples are given below:
*/

//Numbers
const n1=100
const n2=100.3

//boolean
const isLoggedin=true
const isNotLoggedin=false

//symbol
const id= Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId)

//BigInt
const bigNumber= 12345678991111111111133n

//Non-Primitive

/*
Note: Javascript is dynamically typed language.
      Typescript is statically typed language.
*/

const heros=["shaktiman", "nagraj", "doga"]
//array

//key value pairs(example of objects)
let myObj={
    name: "Paritosh",
    age: "22",
}

//functions
const myFunc = function(){
    console.log("Hello World");
}

console.log(typeof myFunc);
//we use typeof operator/funcion to find the value of a datatype in javascript

//+++++++++++++++++++++++++++++++++++++++++++++++

//We have two types of memory in javascript
/*
Stack Memory(Stores Primitive Datatypes)
Stack memory uses copies of values i.e. uses call by value
Heap Memory(Stores Non-Primitive Datatypes)
Heap memory uses call by reference
actual values get updated
*/
