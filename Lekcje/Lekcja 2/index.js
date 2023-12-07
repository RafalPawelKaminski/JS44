let firstNumber = 5;
let secondNumber = 7;

let oddNumber = 13;

let result = firstNumber + secondNumber;

console.log("Dodawanie: " + result);

result = firstNumber - secondNumber;

console.log("Odejmowanie: " + result);

result = firstNumber * secondNumber;

console.log("Mnożenie: " + result);

result = firstNumber / secondNumber;

console.log("Dzielenie: " + result);

console.log("Dzielenie Modulo: " + (oddNumber % 2));

firstNumber++;

console.log(firstNumber);

secondNumber--;

console.log(secondNumber);
result = firstNumber + secondNumber;
console.log("Dodawanie po inkrementacji: " + result);

userAge = 18;
if (userAge >= 18) {
  console.log("Zapraszamy do klubu");
}

haveIDCard = false;

if (userAge >= 18 && haveIDCard == true) {
  console.log("Zapraszamy do klubu");
} else {
  console.log("Musisz być pełnoletni");
}

console.log("Pracuje dalej");

let useres = [
  {
    userName: "Adam",
    userAge: 35,
  },
  {
    userName: "Ania",
    userAge: 25,
  },
  {
    userName: "Tomek",
    userAge: 35,
  },
];

if (useres[0].userAge <= 25 && useres[0].userAge >= 15) {
  console.log("Jesteś w kategorgi 16-25 " + useres[0].userName);
} else if (useres[0].userAge <= 35 && useres[0].userAge >= 26) {
  console.log("Jesteś w kategorgi 30-35" + useres[0].userName);
} else if (useres[0].userAge <= 48 && useres[0].userAge >= 36) {
  console.log("Jesteś w kategorgi 35-48" + useres[0].userName);
} else {
  console.log("Nie obsłużony wiek");
}

let day = "Wtorek";

switch (day) {
  case "Poniedziałek":
    console.log("Dzisiaj jest " + day);
    break;
  case "Wtorek":
    console.log(`Dzisaj jest ${day}`);
    break;
  default:
    console.log("bład");
}

if (day === "Poniedziałek") {
  console.log("Dzisiaj jest " + day);
} else if (day === "Wtorek") {
  console.log("Dzisiaj jest " + day);
} else {
  console.log("bład");
}

function AddTwoNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
AddTwoNumbers(10, 10);
console.log(AddTwoNumbers(10, 10));

let a = 11;
let b = 2;
console.log(AddTwoNumbers(a, b));

const AddTwoNumbersArrow = (z, x = 10) => {
  return z + x;
};

console.log(AddTwoNumbersArrow(firstNumber));
