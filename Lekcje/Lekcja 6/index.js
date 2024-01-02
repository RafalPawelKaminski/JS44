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
