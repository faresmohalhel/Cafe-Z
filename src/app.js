const userName = prompt("Enter your name!");
const userGender = prompt("Enter your gender!");
const welcomeMessage = "Welcome to Cafe Z";

if (userGender === "Male" || userGender === "male") {
  alert(welcomeMessage + " Mr " + userName);
} else if (userGender === "Female" || userGender === "female") {
  alert(welcomeMessage + " Ms " + userGender);
} else {
  alert(welcomeMessage);
}

const userDrinkType = prompt("Would you like a hot or a cold drink?");
const userDrinkName = prompt("Enter drink name!");

alert("Your drink is being prepared!");

console.log(`username = ${userName}, drink = ${userDrinkName}`);
