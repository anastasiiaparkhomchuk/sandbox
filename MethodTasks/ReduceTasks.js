
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
