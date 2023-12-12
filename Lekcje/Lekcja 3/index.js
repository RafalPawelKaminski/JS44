let arr = [1, 2, 3, 4, 5];

let newNumber = 6;

arr = [6, ...arr];

let obj = {
  id: 1,
  name: "Kasia",
};

let newObj = { ...obj, surname: "Nowek" };

let userList = [
  { id: 1, userName: "Adam", userLastName: "Nowak" },
  { id: 2, userName: "Tomek", userLastName: "Nowak" },
  { id: 3, userName: "Romek", userLastName: "Borek" },
  { id: 4, userName: "Atomek", userLastName: "Nowak" },
];

let newUserList = [
  { id: 5, userName: "Agata", userLastName: "Nowak" },
  { id: 6, userName: "Agnieszka", userLastName: "Nowak" },
];

userList.push({ id: 5, userName: "Kasia", userLastName: "Nowak" });

let lastUser = userList.pop();

let firstUser = userList.shift();

// userList = userList.concat(newUserList);

userList = [...userList, ...newUserList];

console.log(arr.includes(2));

console.log(userList.slice(1, 3));

let cutObj = userList.slice(1, 3);

userList.forEach(function (name) {
  console.log(name.userName);
});

userList.forEach((name) => {
  console.log(name.userLastName);
});

let userSurNameChange = userList.map((surname) =>
  surname.userLastName === "Nowak"
    ? { ...surname, userLastName: "Podolski" }
    : surname
);

let ifUserSurG = userList.map((surname) => {
  if (surname.userLastName === "Nowak") {
    surname.userLastName = "Podolski";
    return surname;
  } else {
    surname = surname;
    return surname;
  }
});

let words = ["marchewka", "banan", "noż", "arbuz"];

console.log(words.filter((fName) => fName.length > 3));

console.log(userList.filter((fName) => fName.userName.length > 5));

let wyplaty = [
  {
    id: 1,
    cash: 1234,
  },
  {
    id: 2,
    cash: 2500,
  },
  {
    id: 3,
    cash: 900,
  },
  {
    id: 4,
    cash: 2000,
  },
];

console.log(
  arr.reduce((acc, number) => {
    return acc + number;
  }, 0)
);

console.log(
  wyplaty.reduce((acc, number) => {
    return acc + number.cash;
  }, 0)
);
