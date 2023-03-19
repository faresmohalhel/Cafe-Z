const userName = prompt("Enter your name!");
let userGender = prompt("Enter your gender!").toLowerCase();
let userInfo = [];

while (userGender !== "male" && userGender !== "female") {
  userGender = prompt("Please Enter your gender correctly.").toLowerCase();
}

const welcomeMessage = "Welcome to Cafe Z";

if (userGender === "male") {
  alert(welcomeMessage + ",Mr " + userName);
} else if (userGender === "female") {
  alert(welcomeMessage + ",Ms " + userGender);
} else {
  alert(welcomeMessage);
}

const userDrinkType = prompt("Would you like a hot or a cold drink?");
const userDrinkName = prompt("Enter drink name!");

userInfo[0] = userName;
userInfo[1] = userGender;
userInfo[2] = userDrinkType;
userInfo[3] = userDrinkName;

for (let i = 0; i < userInfo.length; i++) {
  console.log(userInfo[i]);
}

alert("Your drink is being prepared!");

// console.log(`username = ${userName}, drink = ${userDrinkName}`);
