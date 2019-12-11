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

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.



function createNew(employee) {
  for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
    
    let bonusPercentage = 0;

    let totalBonus = employees.annualSalary * bonusPercentage;

    let totalCompensation = employees.annualSalary + totalBonus;
    
    let newEmployee = {
      name: employees.name,
      bonusPercentage: bonusPercentage,
      totalCompensation: totalCompensation,
      totalBonus: totalBonus
    } 
    console.log(newEmployee);
  }

}

console.log(createNew (employees));


// function grabEmployee() {
//   const newEmployeeList = [];
//   for (let employee of employees) {
//     if (employees.reviewRating <= 2) {
//       newEmployeeList.ratingCalc.push();
//     } else if (employees.employeenumber === 4) {
//       newEmployeeList.employeeNumb.push();
//     } else if (employees.annualSalary > 65000) {
//       newEmployeeList.smallSalary.push();
//     } else if (reviewRating === 5) {
//       bonusPercentage = 1;
//     }

//   }



function bonusCalc(employee) {
  console.log('In bonusCalc');
  let bonusPercentage = 0;
  // let bonusPercentage = 0;
  // let totalCompensation = employee.annualSalary + totalBonus;
  // let totalBonus = employee.annualSalary * bonusPercentage;

  if (employees.reviewRating <= 2) {
    bonusPercentage = 0;
  } else if (employees.reviewRating === 3) {
    bonusPercentage = .04;
  } else if (employees.reviewRating === 4) {
    bonusPercentage = .06;
  } else if (employees.reviewRating === 5) {
    bonusPercentage = 1;
  }
  if (employees.employeeNumber <= 9999) {
    bonusPercentage += .05;
  }
  if (employees.annualSalary > 65000) {
    bonusPercentage -= .01;
  } createNew();
  return bonusPercentage;
}




console.log(employees);
bonusCalc();
createNew();
