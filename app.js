const userName = prompt("Enter your name!");
const userAge = prompt("Enter your age!");
const welcomeMessage = "Welcome to Cafe Z";
let userInfo = [];
let userGender = userGenderFunction();

// while (userGender !== "male" && userGender !== "female") {
//   userGender = prompt("Please Enter your gender correctly.").toLowerCase();
// }

function userGenderFunction() {
  let userInput = prompt("Enter your gender").toLowerCase();

  while (userInput !== "male" && userInput !== "female") {
    userInput = prompt("Please Enter your gender correctly.").toLowerCase();
  }

  if (userInput === "male") {
    alert(welcomeMessage + " Mr " + userName);
  } else if (userInput === "female") {
    alert(welcomeMessage + " Ms " + userInput);
  } else {
    alert(welcomeMessage);
  }

  return userInput;
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

// DOM task
const userInputMainContainer = document.querySelector("#user-input");
const userInputContainer = document.createElement("div");
const userNameContainer = document.createElement("p");
const userStatsContainer = document.createElement("ul");
const userStatsItemGender = document.createElement("li");
const userStatsItemAge = document.createElement("li");
const userStatsItemDrink = document.createElement("li");

userInputContainer.setAttribute("class", "p-10 text-sm lg:text-xl");

userStatsItemGender.textContent = `Gender : ${userGender}`;
userStatsItemAge.textContent = `Age : ${userAge}`;
userStatsItemDrink.textContent = `Drink : ${userDrinkName}`;
userNameContainer.textContent = `${userName}`;

userInputContainer.appendChild(userNameContainer);
userInputContainer.appendChild(userStatsContainer);
userStatsContainer.appendChild(userStatsItemAge);
userStatsContainer.appendChild(userStatsItemGender);
userStatsContainer.appendChild(userStatsItemDrink);

userInputMainContainer.appendChild(userInputContainer);

//
