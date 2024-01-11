const user = {
  name: "Radek",
};

function userFabric(name) {
  return { name };
}

//! This funkcja =>
const whyNotArrrow = (name, age) => {
  this.name, this.age;
};

//! utworzenie Konstruktor
function userGoodFabric(name, age) {
  this.imie = name;
  this.wiek = age;
  this.tellMeAbout = function () {
    console.log(
      `Cześć użytkowniku o imieniu: ${this.imie} oraz wieku ${this.wiek}`
    );
  };
}

//! Utworzenie klasy
class createNewUser {
  constructor(name, age) {
    (this.imie = name), (this.age = age);
  }
  hello() {
    console.log(`Hello ${this.imie}`);
  }
  bye() {
    console.log(`Bye ${this.imie}`);
  }
  static genericFn() {
    return console.log("User");
  }
}
//! KONSTRUKTOR
const newUser1 = new userGoodFabric("Kasia", 30);
const newUser2 = new userGoodFabric("Adam", 45);
const newUser3 = new userGoodFabric("Iza", 22);
const newUser4 = new userGoodFabric("Romek", 33);

newUser1.tellMeAbout();

userGoodFabric.prototype.sayGoodBay = function () {
  console.log(`Papa ${this.imie}`);
};
newUser1.sayGoodBay();

//! KLASY
const userClass1 = new createNewUser("Klasa", 44);
console.log(userClass1);
console.log(userClass1.hello());
createNewUser.genericFn();

class User {
  name = "Rafał";
  age = 33;

  get getData() {
    return `${this.name} lat ${this.age}`;
  }
  set getData(val) {
    [this.name, this.age] = val.split(" ");
  }
}
