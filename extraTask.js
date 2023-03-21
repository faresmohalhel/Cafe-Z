setTimeout(() => {
  console.log("Evaluate the following");
  console.log("----------------------");

  console.log("-9*3", -9 * 3);
  console.log("value is + '50'", "value is" + 50);
  console.log("17 % 5", 17 % 5);
  console.log("5 % 17", 5 % 17);
  console.log("5 / 10", 5 / 10);
  console.log("(4 == 4)", 4 == 4);
  console.log("(4 != 5)", 4 != 5);
  console.log("(7 <= 8)", 7 <= 8);
  console.log("Math.ceil(2.3)", Math.ceil(2.3));
  console.log("Math.floor(2.3)", Math.floor(2.3));

  // Q2 read a number from the prompt and display it using alert
  const userNumber = prompt("Enter a number");
  alert("your number is" + " " + userNumber);

  // Q3 read two numbers and display them in ascending order
  const question3number1 = +prompt("Enter a number");
  const question3number2 = +prompt("Enter a second number");
  if (question3number1 === question3number2) {
    alert(question3number1 + ", " + question3number2);
  } else if (question3number1 > question3number2) {
    alert(question3number2 + ", " + question3number1);
  } else {
    alert(question3number1 + ", " + question3number2);
  }

  // Q4 read in two numbers and display the larger
  const question4number1 = +prompt("Enter a number");
  const question4number2 = +prompt("Enter a second number");
  if (question4number1 === question4number2) {
    alert(question4number1 + ", " + question4number2);
  } else {
    alert(
      question4number1 > question4number2
        ? question4number1 + ", " + question4number2
        : question4number2 + ", " + question4number1
    );
  }

  // Q5 read in two numbers and display their sum
  const question5number1 = +prompt("Enter a number");
  const question5number2 = +prompt("Enter a second number");
  alert(question5number1 + question5number2);

  // Q6 check task for full question
  let num = 1;

  switch (num) {
    case 1:
      console.log("ONE");
      break;
    case 2:
      console.log("TWO");
      break;
    case 3:
      console.log("THREE");
      break;
    case 4:
      console.log("FOUR");
      break;
    case 5:
      console.log("FIVE");
      break;
    case 6:
      console.log("SIX");
      break;
    case 7:
      console.log("SEVEN");
      break;
    case 8:
      console.log("EIGHT");
      break;
    case 9:
      console.log("NINE");
      break;
    default:
      console.log("PLEASE TRY AGAIN");
  }

  // Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.
  for (let i = 0; i < 6; i++) {
    alert(i);
  }

  // Q8: Use a loop to display the numbers 0 through 5 in a single alert window
  let printString = "";
  for (let i = 0; i < 6; i++) {
    printString = printString.concat(`${i} `);
  }
  alert(printString);

  // Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3.
  for (let i = 0; i < 21; i++) {
    if (i % 3 === 0) alert(i);
    else continue;
  }

  // Q10: Prompt the user for a number in the range 0…100.  If the number is out of range, display an error message and prompt again until a valid number is entered.  Assume the user enters a number each time

  let question10number1 = +prompt("Enter a number between 0 and 100 - q1");
  while (question10number1 < 0 || question10number1 > 100) {
    question10number1 = prompt("Enter a valid number please");
  }

  // if(question10number1 < 0 ||)

  // Q11: Repeat previous exercise, but this time allow for the possibility that the user enters something that is not a number.  Hint: the built in function isNaN(x) returns true if x is not a number.  It returns false if x is a number.  Sort of backwards, but that's what's available.

  let question11number1 = prompt("Enter a number between 0 and 100 - q2");
  while (
    question11number1 < 0 ||
    question11number1 > 100 ||
    isNaN(question11number1)
  ) {
    question11number1 = prompt("Enter a valid number please");
  }

  // Q12: Prompt for an integer, then display the sum of the integers from 0 through the number entered.  For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

  let question12number1 = parseInt(prompt("Enter an Integer number"));
  let sum = 0;
  for (let i = 0; i <= question12number1; i++) {
    sum += i;
  }
  alert(sum);

  // Q13: Prompt for an integer, then display the average of the integers from 0 through the number entered.  For example, if you enter 10, then display 5 which is the average of   (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)/11.

  const question13number1 = parseInt(prompt("Enter an Integer number"));
  let sum2 = 0;
  for (let i = 0; i <= question13number1; i++) {
    sum2 += i;
  }
  alert(sum2 / question13number1);

  // //******************** DOM extra task *************************** */

  // **test
  // q1
  const isPresent = function (array, value) {
    if (array.includes(value)) return value;
    else return -1;
  };

  // q2
  const findMissingNumber = function (array) {
    array.sort((a, b) => a - b);
    return (
      array.filter((value, index) => {
        if (index === array.length - 1) {
          return false;
        }
        if (value + 1 !== array[index + 1]) return value;
      })[0] + 1
    );
  };

  // ** alt answer for q2
  const findMissingNumberAltAnswer = function (array) {
    array.sort((a, b) => a - b);
    let answer;
    for (let i = 0; i < array.length; i++) {
      if (i === array.length) continue;
      if (array[i] + 1 !== array[i + 1]) {
        console.log(array[i], array[i + 1]);
        answer = array[i] + 1;
        return answer;
      }
    }
  };

  // q3
  const removeDuplicates = function (array) {
    return Array.from(new Set(Array));
  };

  // q4
  const avg = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  };
}, 500);
