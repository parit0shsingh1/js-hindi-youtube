let score = "33"
let score1= "33abc"
let score2= null
let score3= undefined
let score4= true

//Now we will type convert all the above into number 
//rules for type conversion in js are
//the first letter should be capital(some object related concept)

console.log(Number(score)); //33
console.log(Number(score1)); //NaN(Not a Number)
console.log(Number(score2)); //0
console.log(Number(score3)); //NaN(Not a Number)
console.log(Number(score4)); //1(true)/0(false)

//other type conversions are also done in the same manner