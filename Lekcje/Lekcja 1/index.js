// Zmienna - typu number
let ageUser = 12;
//Stała - string
const birthdayUser = "12 Marzec";
// Zmienna - typu boolean
let isUserHaveBrithday = false;
// Zmienna - typu undefined
let age = undefined;
let age2;
// Zmienna - typu boolean
let x = null;

// Console log służy do debgowania elementów tak by pokazały się w DevTools Console
console.log(
  "Nasz użytkownik ma lat " + ageUser + " urodził się on " + birthdayUser
);

// Zmienna złożona - Tablica
let array = [1, "Tekst", false, 4, null];
//Wyświetlanie 2 indeksu tabeli czyli zmiennej typu boolean !! Pamiętaj że w tabeli indeksy zaczynają się od 0
console.log(array[2]);
// Zmienna złożona - Obiekt
let book = {
  ibn: 1234,
  author: " S. King",
  listOfTaken: [1, 2, 3, 4, 5],
};
//Wyświetlanie klucza obiektu book o nazwie ibn
console.log(book.ibn);

// Opis zadania 3

let a = 5;
let b = 6;

let c = (a + b) / 2;
