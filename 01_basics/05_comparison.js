//comparison in the same datatype is not that complex, instead it is pretty standard
/*
console.log(2 > 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 >= 1)
console.log(2 <= 1)
console.log(2 != 1)
*/
//problem arises when  these operators are used ofr comparing different types
//thus we don't usually do so in order to get ore standardised results
console.log("2" > 1)
console.log("02" > 1)

//some standard problematic results are
/*
console.log(null>0)
console.log(null==0)
console.log(null>=0)
similar problems rise with undefined and null due to various different conversions
some get converted to NaN, some to 0 and some to get convereted to undefined values.
*/

/*
NOTE:- Comparison i.e. >, <, >=, <= and
       equality check i.e. ==, === work in a very different manner.
*/  

/*
strict check(===):-
checks value along with datatype
if not same then return false
*/
