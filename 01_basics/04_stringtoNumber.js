//string to number conversion is a bit confusing
//----------------*operations*-----------------

let value=3
let negValue= -value
console.log(negValue) // negates a value in sign
/*
basic operations in javascript
console.log(2+2) add
console.log(2-2) subtract
console.log(2*2) mul
console.log(2**3) power
console.log(2/3) div
console.log(2%1) modulus
*/

//for conversion to string etc we  refer to ToPrimitive ECMA script

// we can have multiple scenarios
/*
console.log("1"+2)// 12
console.log(1+"2")//12
console.log("1"+2+2)//122 string first then all string
console.log(1+2+"2")//32 string last then all conversions first then appended string

console.log((3+4)*5%3)
*/

//we also have prefix and postfix increment and decrement operators in javascript

let num=20
console.log(num++)//post increment
console.log(++num)//pre increment