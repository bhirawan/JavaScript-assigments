// Q1: Increment / Decrement Demonstration


let a = 10;
let result = "";

result += "Result:<br>";
result += "The value of a is: " + a + "<br><br>";

result += "The value of ++a is: " + (++a) + "<br>";
result += "Now the value of a is: " + a + "<br><br>";

result += "The value of a++ is: " + (a++) + "<br>";
result += "Now the value of a is: " + a + "<br><br>";

result += "The value of --a is: " + (--a) + "<br>";
result += "Now the value of a is: " + a + "<br><br>";

result += "The value of a-- is: " + (a--) + "<br>";
result += "Now the value of a is: " + a + "<br><br>";

// Display on browse
document.write("<h1>Question #01 </br>")
document.write(result)

// Q2:Execute the output & show step by step

// var a =2 ,b = 1

// var output = --a - --b + ++b + b-- ;

// output step by step

// --a --->becomes 1 (due to pre-decrement)

// --a - --b  --->as (a becomes 0 due to pre-decrement & b also becomes 0 due to pre-decrement)
// so  0-0 = 0

// --a - --b + ++b  --->as(now value of a becomes -1 due to pre-decrement & value of b also becomes -1 due to pre-decrement
//   & the value of b then changes into 0 due to post-increment as -1 cancels +1)
// so   -1-(-1)+0
//       -1+1+0=0

// --a - --b + ++b + b--   --->as(a has value -1 becomes -2 due to pre-decrement,value of b changes into -1 from due to pre-decrement
//   ,then again value of b changes into 0 from -1 due to post-increment as -1 cancels +1 & value of b 0 uses again and change next time when b again uses)
// so   -2-(-1)+0+0
//       -2+1+0
//       -1+0=-1
document.write("<h1>Question #02</br>")
document.write("<h1>Answer of:--a - --b + ++b + b-- is;</br>")
document.write(output=-1)



// Q3: Take input name and greet user
let userName = prompt("Enter your name:");


document.write("<h1>Question #03 </br>")
document.write("<h1>Greeting the User:</br>")
document.write("Hello, " + userName + "!<br>"); 


// Q5: Multiplication Table
let num = prompt("Enter a number for multiplication table:", "5");
num = num ? Number(num) : 5;  // Default 5 if no input
document.write("<h1>Question #05 </br>")
document.write("<h1>Multiplication Table of " + num + "</br>");
for (let i = 1; i <= 10; i++) {
  document.write( num + " x " + i + " = " + (num * i)+"<br>" );
}


// Q6: Marks Sheet
let subject1 = prompt("Enter 1st subject name:");
let subject2 = prompt("Enter 2nd subject name:");
let subject3 = prompt("Enter 3rd subject name:");

let totalMarks = 100;

let obtained1 = +prompt("Enter obtained marks for " + subject1 + ":");
let obtained2 = +prompt("Enter obtained marks for " + subject2 + ":");
let obtained3 = +prompt("Enter obtained marks for " + subject3 + ":");


let percentsub1 =(obtained1/totalMarks)*100
let percentsub2 =(obtained2/totalMarks)*100
let percentsub3 =(obtained3/totalMarks)*100

let totalObtained = obtained1 + obtained2 + obtained3;
let grandTotal = totalMarks * 3;
let percentage = (totalObtained / grandTotal) * 100;

// Show results in table
document.write("<h1>Question #06 </br>")
document.write("<h1>Marks Sheet")
document.write(`<br><table border=1>
    <tr>
      <th>Subjects</th>
      <th>Total Marks</th>
      <th>Obtained Marks</th>
      <th>Percentage</th>
    </tr>
    <tr>
    <td>${subject1}</td>
    <td>${totalMarks}</td>
    <td>${obtained1}</td>
    <td>${percentsub1}</td>
    </tr>
    <tr>
    <td>${subject2}</td>
    <td>${totalMarks}</td>
    <td>${obtained2}</td>
    <td>${percentsub2}</td>
    </tr>
    <tr>
    <td>${subject3}</td>
    <td>${totalMarks}</td>
    <td>${obtained3}</td>
    <td>${percentsub3}</td>
    </tr>
    <tr>
    <td></td>
    <td>${grandTotal}</td>
    <td>${totalObtained}</td>
    <td>${percentage}</td>
    </tr>
  </table>`)








