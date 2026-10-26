


// Task: The Movie Ticket Discount Checker 🎟️

// Imagine you are building a simple ticketing system for a cinema. Write a JavaScript program that determines a customer's ticket price based on their age.
 
// The Rules:

// If the customer is under 12 years old, they get a Child Ticket ($5).

// If the customer is between 12 and 60 years old (inclusive), they get a Standard Adult Ticket ($10).

// If the customer is over 60 years old, they get a Senior Discount Ticket ($7).
 
// 1. Переписати рішення і використати конструкцію "switch-case"
// let age = 45;
// let ticketPass
// if (age < 12) { ticketPass = 5}
// else if (age <= 60) {ticketPass = 10}
// else if (age > 60) (ticketPass = 7)
// console.log(ticketPass)


let age = 112;
let ticketPass;

switch (true) {

  case (age < 12):
    ticketPass = 12;
    break;

case (age >= 12 && age <= 60):
ticketPass = 10;
break;

  case (age > 60 ):
ticketPass = 7;
break;

}
console.log(ticketPass)


