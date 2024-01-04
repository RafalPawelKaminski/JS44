const btnJoke = document.querySelector("#btn");
const userName = document.querySelector("#name");
const btn = document.querySelector("#hello");

try {
  const parsedText = JSON.parse('{"name":"Tomasz""}');
  console.log(parsedText);
} catch (error) {
  console.log(error);
  console.log(111);
}

const AddJoke = (joke) => {
  const listItem = document.createElement("li");
  listItem.innerText = joke;
  document.body.appendChild(listItem);
};

try {
  btnJoke.addEventListener("click", async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/rando");
    const data = await response.json();
    AddJoke(data.value);
  });
} catch (error) {
  console.log(error);
}

// console.log("Tadam");

const sayHello = (name) => {
  if (typeof name == "undefined") {
    throw new Error("Funkcja musi otrzymać imie!");
  }
  return `Hello ${name}`;
};

btn.addEventListener("click", () => {
  if (userName.value == "") {
    throw new Error("Musisz podać imię");
  }
  return console.log(`Witaj ${userName.value}`);
});
const addFox = (data) => {
  let crImg = document.createElement("img");
  crImg.src = data;
  document.body.appendChild(crImg);
};
axios
  .get("https://randomfox.ca/floof/")
  .then((resp) => {
    addFox(resp.data.image);
  })
  .catch((err) => console.log(err));

const urlPOST = "https://jsonplaceholder.typicode.com/posts";
let dane1 = {
  userId: 10,
  id: 101,
  title: "Moje dane",
  body: "Jakieś moje dane",
};

axios
  .post(urlPOST, dane1)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
