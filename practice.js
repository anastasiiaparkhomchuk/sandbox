// Створити масив об'єктів користувачів - кожен користувач має два параметри: ім'я та вік. +
// Розширити вирішення задачі: цикл повинен ітерувати через масив користувачів, 
// і всередині циклу використовувати функцію для розрахунку вартості квитки.
//  На екран вивести ім'я користувача та вартість квитка для нього. 
let users = [
    { name: "Anastasiia", age: 30 },
    { name: "Olena", age: 63 },
    { name: "Charlie", age: 121 }
];

function calculatePrice(user) {
    let age = user.age
    if (age < 12 ) {
        return 5;
    }
     if (age >= 12 && age <= 60) {
            return 10;
        } else {
            return 7;
        }
        }

for(let i = 0; i < users.length; i++){
    let currentUser = users[i];
    let price = calculatePrice(currentUser);
    console.log(`Name: ${currentUser.name}, need to pay: ${price}.`);
}





// Write a method to calculate average and total salary. Method should have an input parameter which would determine if average or total should be returned.
// JavaScript
const arr = [{
  "name": "Becky",
  "salary": 1800,
  "city": "London"
},
{
  "name": "Ivan",
  "salary": 1500,
  "city": "Kyiv"
},
{
  "name": "Olena",
  "salary": 4500,
  "city": "Rome"
}]

function calculateSalary(operation){
    const total = arr.reduce((sum, employee) => {
        return sum + employee.salary;

    }, 0);

    if (operation === 'total') {
        return total;
    }

    if (operation === 'average') {
        return total / arr.length;
    }

}

console.log(calculateSalary('total'));
console.log(calculateSalary('average'));


    // for (const employee of arr) {
    //     total = total + employee.salary;
    // }


    // switch (operation) {
    //     case 'total':
    //         return total;
    //     case 'average':
    //         return total / arr.length;
    //     default:
    //         throw new Error('Invalid operation');
    // }





    // Filter failed test results by result
const testResults = [
  { name: "Login works", status: "passed" },
  { name: "Invalid password message", status: "failed" },
  { name: "Logout works", status: "passed" }
];
const failesTestResults = testResults.filter(test => test.status === 'failed');
 console.log(failesTestResults)

// Map test cases into readable report lines
 
const testCases = [
  { id: "TC-101", title: "User can log in", priority: "high" },
  { id: "TC-102", title: "User can reset password", priority: "medium" },
  { id: "TC-103", title: "User can log out", priority: "low" }
];
// Produce something like: 
 
// [
//   "[TC-101] User can log in — Priority: HIGH",
//   "[TC-102] User can reset password — Priority: MEDIUM",
//   "[TC-103] User can log out — Priority: LOW"
// ]
 
const readableReportLines = testCases.map(tc => `[${tc.id}] ${tc.title} - Priority: ${tc.priority.toUpperCase()}`)
console.log(readableReportLines)
 
 
//написати метод для обертання значення String.
//Метод має приймати текст від користувача через консоль, а повертати той самий, але розвернутий текст
 
  
let  reverse = reverseText("Anastasiia")
    function reverseText(str) {
        return str.split('').reverse().join('');
    }

    console.log(reverse)