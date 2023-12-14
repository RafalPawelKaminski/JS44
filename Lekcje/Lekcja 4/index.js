const firstBtn = document.getElementById("btn1");
const qfirstBtn = document.querySelector("#btn1");
const addBtn = document.querySelector("#btnAdd");
const textInput = document.querySelector("#item");
const shopList = document.querySelector("#shopList");

// qfirstBtn.style.backgroundColor = "red";
// qfirstBtn.style.fontSize = "90px";

// qfirstBtn.style.setProperty("color", "white");

qfirstBtn.addEventListener("click", () => {
  qfirstBtn.classList.add("btnRed");
});

qfirstBtn.addEventListener("mouseenter", () => {
  qfirstBtn.classList.add("btnRed");
});
qfirstBtn.addEventListener("mouseleave", () => {
  qfirstBtn.classList.remove("btnRed");
});

addBtn.addEventListener("click", () => {
  let itemName = document.createElement("span");

  let checkbox = document.createElement("input");
  let btnDelete = document.createElement("button");

  checkbox.type = "checkbox";
  btnDelete.innerText = " Usuń ";
  itemName.id = "itemList";

  itemName.innerText = textInput.value;

  shopList.appendChild(itemName);
  itemName.appendChild(checkbox);
  itemName.appendChild(btnDelete);
  textInput.value = "";
  btnDelete.addEventListener("click", () => {
    shopList.removeChild(itemName);
  });
});

let userList = [
  { id: 1, userName: "Adam", userLastName: "Nowak" },
  { id: 2, userName: "Tomek", userLastName: "Nowak" },
  { id: 3, userName: "Romek", userLastName: "Borek" },
  { id: 4, userName: "Atomek", userLastName: "Nowak" },
];

for (let i = 0; i < userList.length; i++) {
  let user = document.createElement("span");
  user.textContent = `Imię: ${userList[i].userName}`;
  document.body.appendChild(user);
}

userList.forEach((userL) => {
  let user = document.createElement("span");
  user.textContent = userL.userName;
  document.body.appendChild(user);
});

userList.map((userL) => {
  let user = document.createElement("span");
  user.textContent = userL.userName;
  document.body.appendChild(user);
});
