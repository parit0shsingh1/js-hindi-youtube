const accountId = 144553 /*keeps the constant value noo matter what*/
let accountEmail = "paritoshk1011@gmail.com"/* scope bound variable declaration*/
var accountPassword = "12345"/*not bound by scope thus not very much used in the js*/
accountCity = "Jaipur"/*not a good practice but shows how secure js actually is*/
let accountState/*will return the value undefined*/

//accountId=2 //not allowed

accountEmail="hsbc@gamil.com"
accountPassword="23456"
accountCity="Patna"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])/*used to print multiple things at a time in the form of a table or tabular interpretation of console.log*/
/*----NOTE----
prefer not to use var because of issue of black scope and functional scope
*/