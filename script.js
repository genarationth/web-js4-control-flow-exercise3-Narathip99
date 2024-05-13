let dayNumber = 6; 

// 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
if (dayNumber === 0 || dayNumber === 6) { // if dayNumber is 0 or 6
  console.log("It is the weekend!");
} else if (dayNumber > 6) { // if dayNumber is greater than 6
  console.log("Invalid day number");
} else { // 1 - 5 is weekday TT
  console.log("It is the weekday!");
}

/*  Switch Case kub
let dayNumber = 7; 

switch (dayNumber) {
  // 0 and 6 is weekend
  case 0:
  case 6:
    console.log("It is the weekend!");
    break;
  // 1 - 5 is weekday
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("It is the weekday!");
    break;
  // not 0 - 6 is invalid
  default:
    console.log("Invalid day number");
    break;
}
*/