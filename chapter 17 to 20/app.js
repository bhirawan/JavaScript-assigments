// 1. Declare and initialize an empty multidimensional array.(Array of arrays)

// var arr=[];

// 2. Declare and initialize a multidimensional array representing the following matrix:

// const arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1],
// ]
// for(let i = 0;i<arr.length;i++){
//   for(let j=0;j<arr[i].length;j++){
//     document.write(arr[i][j]+" ")
//   }
//   document.write("<br />")
  
// }

// 3. Write a program to print numeric counting from 1 to 10.

// for(var i=1;i<=10;i++){
//     document.write(i+'<br>')
// }


// 4. Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.


// let userNum = +prompt("Enter a table to show its multiplication table");
// let tableLength = + prompt("Enter the length multiplication table")
// for (let i = 1; i <= tableLength; i++) {
//   document.write(`${userNum} x ${i} = ${userNum*i} `+ "<br />")
  
// }


// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”];

// let fruits=['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for(let i=0;i<fruits.length;i++){
//     document.write(fruits[i]+'<br>')
// }
// document.write('<br>')
// for(let j=0;j<fruits.length;j++){
//     document.write('Element at index '+j + ' is '+fruits[j]+'<br>');}


// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// document.write('<h3>'+'Counting'+'</h3>')
// document.write('<br>');
// for(let i=1;i<=15;i++){
//     document.write(i+'<br>')};

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// document.write('<h3>'+'Reverse Counting'+'</h3>');
// document.write('<br>');
// for(let i=10;i>=1;i--){
//     document.write(i+'<br>')
// }

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20


// document.write('<h3>'+'Even'+'</h3>')
// document.write('<br>');
// for(let i=0;i<=20;i++){
//     document.write(i++ +'<br>')};


// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19



// document.write('<h3>'+'Odd'+'</h3>')
// document.write('<br>');
// for(let i=1;i<=19;i=i+2){
//     document.write(i+'<br>')};


// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



// document.write('<h3>'+'Series'+'</h3>')
// document.write('<br>');
// for(let i=2;i<=20;i=i+2){
//     document.write(i+'k'+'<br>')
// }

//7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given 

//  item is found in the list or not. Example:

// let A=['cake','apple pie','cookie','chips','patties'];
// let userInput=prompt('Enter the item name');
// for(let i=0;i<A.length;i++){
// if(userInput === A[i]){
//     alert(userInput+' is available at index +i+ 'in our bakery')
//      break;
// }
// else{
//     alert('We are sorry .'+userInput+' is not available in our bakery')


  
// let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let userInput = prompt('Enter the item name');
// userInput = userInput.toLowerCase();
// let check = false;
// for (let i = 0; i < A.length; i++) {
//     if (userInput === A[i]) {
//         document.write(A[i] + ' is available at index ' + i + ' in our bakery')
//         check = true;

//     }
// }


// if (check === false) {
//     document.write('We are sorry .' + userInput + ' is not available in our bakery')

// }


// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].


// const numbers = [24,53,78,91,12];
// let largestNum = numbers[0]; 

// for (let i = 0; i < numbers.length; i++) {
 
//   if (numbers[i] > largestNum) {
    
//     largestNum = numbers[i];
//   }
// }
// console.log(largestNum);


// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

// const numbers = [24,53,78,91,12];
// let smallestNum = numbers[0]; 

// for (let i = 0; i < numbers.length; i++) {
 
//   if (numbers[i] <  smallestNum) {
    
//      smallestNum = numbers[i];
//   }
// }
// console.log( smallestNum);



// 10. Write a program to print multiples of 5 ranging 1 to 100.

// for(let i=5;i<=100;i=i+5){
//     document.write(i+',')
// }




