const LessonBox = document.querySelector("#lesson-box");
const JokeList = document.querySelector("#joke-list");
const btnJoke = document.querySelector("#give-joke");
const btnFox = document.querySelector("#give-fox");
const urlFox = "https://randomfox.ca/floof/";
const BookSearch = document.querySelector("#booksrc");
const btnSearch = document.querySelector("#search");

btnJoke.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((resp) => resp.json())
    .then((data) => {
      AddJoke(data.value);
    })
    .catch((error) => console.log(error));
});

const AddJoke = (joke) => {
  const listItem = document.createElement("li");
  listItem.innerText = joke;
  JokeList.appendChild(listItem);
};
// Zadanie 1 i 2
btnFox.addEventListener("click", () => {
  fetch(`${urlFox}`)
    .then((resp) => resp.json())
    .then((data) => AddFox(data.image))
    .catch((err) => console.log(err));
});

const AddFox = (fox) => {
  const foxImg = document.createElement("img");
  foxImg.src = fox;
  foxImg.setAttribute("data-tag", "img-cat");
  LessonBox.appendChild(foxImg);
};
//
let searchUrl = "https://openlibrary.org/search.json?title=";

btnSearch.addEventListener("click", () => {
  let searchValue = BookSearch.value.split(" ").join("+").toLowerCase();
  let completeLinkSearch = searchUrl + searchValue;
  console.log(completeLinkSearch);
});

let dane = {
  userId: 10,
  id: 101,
  title: "Moje dane",
  body: "Jakieś moje dane",
};

const urlPOST = "https://jsonplaceholder.typicode.com/posts";
fetch(urlPOST, {
  method: "post",
  body: JSON.stringify(dane),
})
  .then((respone) => respone.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const myPromise = new Promise((resolve, reject) => {
  let x = 0;
  if (x == 0) {
    resolve("Dane są poprawne");
  } else {
    reject("Bład danych");
  }
});

const myPromise2 = new Promise((resolve, reject) => {
  let x = 0;
  if (x == 0) {
    resolve("Dane są poprawne");
  } else {
    reject("Bład danych");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .then((result1) => {
    console.log(result1);
  })
  .catch((err) => console.log(err));

Promise.all([myPromise, myPromise2])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

const getData = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();
  AddJoke(data.value);
};
