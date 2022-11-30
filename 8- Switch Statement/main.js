let day = "   friday  ";
let dayWithoutSpace = day.trim()
let lastStateDay = dayWithoutSpace[0].toUpperCase() + dayWithoutSpace.substring(1, dayWithoutSpace.length);

switch (lastStateDay) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  case "World":
    console.log("Its Not A Valid Day");
    break;
}