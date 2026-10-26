function calculatePrice(age) {
  if (age < 12) {
    return 5
  }
  else if  ( age >=60) {
    return 10
  }
    else {
      return 7
    }
}
    console.log(calculatePrice(6))

// 2. Створити функцію calculatePrice(), яка прийматиме вік клієнта й повертатиме вартість квитка




let ages = [ 4, 5, 12, 45, 89]
for (let i = 0; i < ages.length; i++){
  let currentAge = ages[i];
  let price = calculatePrice(currentAge);
  console.log(`Клієнт віком ${currentAge} років має заплатити $${price}.`);
}
