// import { multiplyNbr } from "./index2.js";
// import { userData } from "../services/userData.js";
// import { budgetCalc } from "./utli/budget.js";

// multiplyNbr(2, 5);

// console.log(userData[2]);

// console.log(budgetCalc(userData));
//! DOMKNIECIA

const test = () => {
  let secret = 0;
  return () => {
    secret += 1;
    return secret;
  };
};

(function () {
  console.log("Odpaliłam się sama");
})();
const getSecret = test();
