// Question:1. City Name

let userCity = prompt("Enter your city name")

if(userCity==="Karachi"){
    alert("Well come to city of lights!")
}
else{
    alert("please come to Karachi")
}

// Question:2. Gender input

let userGender = prompt("Enter your gender please")
if(userGender ==="Male"){
document.write("Good Morning Sir!")
}
else if(userGender ==="Female"){
    document.write("Good Morning Ma'am!")
}

// Question:3. Traffic signals

let signalColor = prompt("Enter a signal color.")
if(signalColor=== "Red"){
    console.log(" Must Stop")
}
else if(signalColor==="yellow"){
    console.log(" Ready to move")
}

else if(signalColor==="Green"){
    console.log("Move Now")
}

// Question:4.Fuel check

let userFuel = prompt("Enter your remaining fuel.")
if(userFuel<"0.25"){
    alert("Please refill the fuel in your car!")
}

// Question:5.


//a
let a = 4;
if (++a === 5){
  alert("given condition for variable a is true");
}

//b
let b = 82;
if (b++ === 83){
  alert("given condition for variable b is true");
}

c
let c = 12;
if (c++ === 13){
  alert("condition 1 is true");
}
if (c === 13){
  alert("condition 2 is true");
}
if (++c < 14){
  alert("condition 3 is true");
}
if(c === 14){
  alert("condition 4 is true");
}

d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals");
}

//e
if (true){
  alert("True");
}
if (false){
  alert("False");
}

//f
if("car" < "cat"){
  alert("car is smaller than cat");
}


// // 6. Write a program to take input the marks obtained in three
// // subjects & total marks. Compute & show the resulting
// // percentage on your page. Take percentage & compute
// // grade as per following table:

let subject1 = +prompt("Enter marks obtained in Subject 1:");
let subject2 = +prompt("Enter marks obtained in Subject 2:");
let subject3 = +prompt("Enter marks obtained in Subject 3:");
let totalMarks = +prompt("Enter total marks:");

let obtainedMarks = subject1 + subject2 + subject3;

let percentage = (obtainedMarks / totalMarks) * 100;

// Grade & remarks
let grade, remarks;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

// Question:7.Guess game .

let secret = Math.floor("Math.randam()*10") +1;

let guess = +prompt("Guess the number (1 -10):");

if (guess === secret){
    alert("Bingo! Correct answer");
}
else if (guess + 1 === secret){
    alert("Close enough to the correct answer");
}
else{
    alert( "Wrong guess the secret was " + secret);
}



// Question:8. Divisible by 3 

let divisibleNumber = +prompt("Please enter a number:")

if(divisibleNumber % 3 ===0){
    document.write(divisibleNumber + " is divisible by 3") 
}

else{
     document.write(divisibleNumber + " is not divisible by 3")  
}

// Question:9.Even or Odd

let num = +prompt("Enter a number.");

if (num % 2 === 0){
    alert(num +" is Even");
}
else{
    alert(num +" is Odd")
}


// Question:10.Temperature

let temperature = prompt("Enter your city weather.")
if(temperature >"40"){
    document.write("It too hot outside!")
}
else if(temperature >"30"){
    document.write(" The weather is normal today!")
}

else if(temperature >"20"){
    document.write("  Today's weather is cool!")
}

else if(temperature >"10"){
    document.write("  Today's weather is so cool!")
}


// Question:11.Calculator

let num1 = +prompt("write your first number")

let num2 = +prompt("write your second number")

let operator =prompt("what you wanna operate")

if(operator=="+"){
    alert(num1+num2)
}
else if(operator == "-"){
    alert(num1-num2)
}

else if(operator == "*"){
    alert(num1*num2)
}


else if(operator == "/"){
    alert(num1/num2)
}

else {
    alert(num1%num2)
}
