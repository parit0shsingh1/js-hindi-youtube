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
const anotherId= symbol('123')

console.log(id === anotherId)

/*
Note: Javascript is dynamically typed language.
      Typescript is statically typed language.
*/