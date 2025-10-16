// Q: 1
// Write a program that takes a positive integer from user & display the following in your browser a. number b. round off value of the number c. floor value of the number d. ceil value of the number.

// let num = +prompt("Enter number: ");
// let round=Math.round(num);
// let floor=Math.floor(num);
// let ceil=Math.ceil(num);
// document.write('Number :'+num+'<br>')
// document.write('Round off value :'+round+'<br>')
// document.write('Floor value :'+floor+'<br>')
// document.write('ceil value :'+ceil+'<br>')


//Q: 2
// Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number

//  let num = +prompt("Enter number: ");
// let round=Math.round(num);
// let floor=Math.floor(num);
// let ceil=Math.ceil(num);
// document.write('Number :'+num+'<br>')
// document.write('Round off value :'+round+'<br>')
// document.write('Floor value :'+floor+'<br>')
// document.write('ceil value :'+ceil+'<br>')

//Q: 3
//Write a program that displays the absolute value of a number. 

// let num=+prompt('Enter number :');
// let abs=Math.abs(num);
// document.write('The absolute value of '+num+'  is '+abs)


// Q: 4
// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: 

// let randomNo=Math.random()*6;
// let floor=Math.floor(randomNo);
// document.write('random die value : '+floor)

// Q: 5
// Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 

// let coinValue=Math.random()*3;
// let floor=Math.floor(coinValue);
// console.log(floor)
// if(coinValue<2){
//     document.write(floor+'<br>'+' random coin value : Tails')
// }
// else{
//     document.write(floor+'<br>'+' random coin value : Heads')
// }

// Q: 6
// Write a program that shows a random number between 1 and 100 in your browser. 

// let random=Math.random()*100;
// let ceil=Math.ceil(random);
// document.write('random number between 1 and 100:'+ceil)

// Q: 7
// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser

// let weight=prompt('Enter your weight in kilogramas');
// let parse=parseFloat(weight);
// document.write('The weight of userr is '+parse.toFixed(1)+' kilograms')

// Write a program that stores a random secret number from 1 to 10 in a variable.
//  Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 

// let randomNo=Math.ceil((Math.random()*10));
// document.write(randomNo)
// let userInput=prompt('Enter a number in between 1 and 10');
// if(userInput===randomNo){
//     alert('Congratulations  you entered the same number')
// }
// else{
//     alert('Try Again')
// }