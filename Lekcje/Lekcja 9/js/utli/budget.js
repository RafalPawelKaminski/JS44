export const budgetCalc = (table) => {
  const bilansIncome = table.reduce((acc, income) => {
    let a = parseInt(income.value);
    return (acc += a);
  }, 0);
  return bilansIncome;
};
