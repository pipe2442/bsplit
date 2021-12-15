export const deleteItem = (menu, index) => {
  menu.splice(index, 1);
  return menu;
};

export const usersPercentage = (users) => {
  let objects = [];
  for (var x = 0; x < users; x++) {
    let obj = {
      index: x,
      percentage: 0,
    };
    objects.push(obj);
  }
  return objects;
};

export const dishTotal = (price, quantity) => (price * quantity).toFixed(2);

export const customPer = (final, percentage) =>
  ((final * percentage) / 100).toFixed(2);

export const percentageSum = (users) => {
  let percentages = users.map((u) => Number(u.percentage));
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return percentages.reduce(reducer, 0);
};

export const billCalculations = (order, tip, users) => {
  const addValues = (bill) => {
    return bill
      .map((a) => a.price * a.quantity)
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  };
  const findTax = (tip, total) => ((total * tip) / 100).toFixed(2);
  const equalDivision = (final, users) => (final / users).toFixed(2);
  const finalSum = (total, tax) => (Number(total) + Number(tax)).toFixed(2);

  const total = addValues(order);
  const tax = findTax(tip, total);
  const final = finalSum(total, tax);
  const equalParts = equalDivision(final, users);

  return { total, tax, final, equalParts };
};
