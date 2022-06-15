const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


console.log( employees );

for ( let i = 0; i < employees.length; i++){
  function listEmployees (employees) {
    console.log(employees[i]);
  }
}

function Employee(name, bonusPercentage, totalCompensation, totalBonus){
  this.name = name;
  this.bonusPercentage = bonusPercentage;
  this.totalCompensation = totalCompensation;
  this.totalBonus = totalBonus;
};

const Maya = new Employee('Maya','82397','26483', '837');
console.log(Maya);

let bonus = 0;


// function calculateBonus (employees) {
//   for ( let i = 0; i < employees.length; i++){
//       if (employees[i].reviewRating <= 2) {
//       bonus = 0;
//       }
//       else if (employees[i].reviewRating === 3) {
//         bonus = employees[i].annualSalary * .04;
//       }
//       else if (employees[i].reviewRating === 4 ){
//         bonus = employees[i].annualSalary * .06;
//       }
//       else if (employees[i].reviewRating === 5 ){
//         bonus = employees[i].annualSalary * .10;
//       }
//   }
//   return employees[i];
// }

//calling function within the loop
//input a singlar employee into the function via the loop


for (let i = 0; i < employees.length; i ++) {
  console.log('in calculateBonus' , calculateBonus(i, employees));
}

function calculateBonus (i, employees) {
  let bonus;
  if (employees[i].reviewRating <= 2) {
    bonus = 0;
  }
  else if (employees[i].reviewRating === 3) {
    bonus = employees[i].annualSalary * .04;
  }
  else if (employees[i].reviewRating === 4 ){
    bonus = employees[i].annualSalary * .06;
  }
  else if (employees[i].reviewRating === 5 ){
    bonus = employees[i].annualSalary * .10;
  }
  if (employees[i].employeeNumber.length === 4); {
    bonus = bonus + employees[i].annualSalary * .05; 
    }
  if (employees[i].annualSalary > 65000){
    bonus = bonus * .99;
  }
  return bonus;
}


// function employeeNum (i, employees) {
//   let bonus = 0;
//   if (employees[i].employeeNumber.length === 4); {
//   bonus = bonus + employees[i].annualSalary * .05; 
//   }
//   return bonus;
// }

// console.log(employeeNum (0, employees));
// console.log(employees[0].employeeNumber.length);




