// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a


// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// let character = prompt('please enter the character to check wether the given input is number,uppercase letter or lowercase letter')
// let value = character.charAt(0);

// //Checking for Number
// if (value >= 48 && value <= 57) {
//     alert(character + " is number");
// }

// //Checking for UpperCase Letters
// else if (value >= 65 && value <= 90) {
//     alert(character + " is Uppercase Letter");
// }

// //Checking for LowerCase Letters
// else if (value >= 97 && value <= 122) {
//     alert(character + " is Lowercase Letter");
// }

// else {
//     alert("Given input is not a number or letter");
// }

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// let firstnumber = +prompt('please enter your 1st number')

// let secondnumber = +prompt('please enter your 2nd number')

// if(firstnumber>secondnumber){
//     alert(firstnumber + ' '+'is larger than'+ ' ' + secondnumber)
// }
// else if(firstnumber<secondnumber){
//      alert(secondnumber +' '+'is larger than'+ ' ' +firstnumber)
// }
// else{
//       alert(firstnumber + ' ' +'and' +' ' +secondnumber + ' ' + 'are both equal.')
// }

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// let number = +prompt('please enter a number to check that wether the given input is positive,negative or zero.')

// if(number>0){
//     alert(number + ' ' + 'is positive.')
// }
// else if(number<0){
//     alert(number + ' ' + 'is negative.')
// }
// else{
//     alert(number + ' ' + 'is zero.')
// }

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

//  let input = prompt('Enter a character to check wether input is vowel or not.')

//  if(input === 'a' ||input === 'A'||input === 'e' ||input === 'E'||input === 'i'||input === 'I'||input === 'o'||input === 'O'||input === 'u'||input === 'U'){
//     alert(input +' '+'is vowel.')
//  }
//  else{
//      alert(input +' '+'is not vowel.')
//  }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”.
// Show “Incorrect password” otherwise.

// let password = 'Bukht13'

// let userPassword = prompt('Please enter your password.')

// if(password === ''){
//     alert('Please enter your password.')
// }
// else if(userPassword === password){
//     alert('Correct!Password you entered matches the original password.')
// }
// else{
//     alert('Incorrect password.')
// }

// 6. This if/else statement does not work. Try to fix it:

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// let greeting;
// let hour = 13
// if(hour < 18){
//     greeting = 'Good day!'
//     alert(greeting)
// }
// else{
//    greeting = 'Good evening!'
//     alert(greeting) 
// }



// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
1900 =  7PM.

// Implement the following case using if, else & else if statements.

// let time = +prompt('please enter in 24 hours \n clock format like:19:00 = 7pm')

// if(time>=000 && time<1200){
//     alert('Good Morning!')
// }
// else if(time>=1200 && time<1700){
//     alert('Good Afternoon!')
// }
// else if(time >=1700 && time<2100){
//     alert('Good Evening!')
// }
// else if(time >=2100 && time<=2359){
//     alert('Good Night!')
// }
// else{
//     alert('Invalid Input!')
// }


