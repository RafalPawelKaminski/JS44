let arr = [
  {
    name: "Wpływ 1",
    value: "10",
  },
  {
    name: "Wpływ 2",
    value: "20",
  },
  {
    name: "Wpływ 3",
    value: "30",
  },
];
let arr2 = [
  {
    name: "Wpływ 1",
    value: "1",
  },
  {
    name: "Wpływ 2",
    value: "10",
  },
  {
    name: "Wpływ 3",
    value: "15",
  },
];

const bilansIncome = arr.reduce((acc, income) => {
  let a = parseInt(income.value);
  return (acc += a);
}, 0);
const bilansExpanses = arr2.reduce((acc, income) => {
  let a = Number(income.value);
  return (acc += a);
}, 0);

let bilans = bilansIncome - bilansExpanses;

console.log(bilansIncome);
console.log(bilansExpanses);
console.log(bilans);
