export const deleteItem = (menu, index) => {
  menu.splice(index, 1)
  return menu
}

export const addValues = (bill) => {
  return bill.menu.map((a) => a.value).reduce((a, b) => a + b, 0)
}

export const findTax = (bill, total) => total * (Number(bill.tip) / 100)

export const equalDivision = (total, tax, bill) => ((total + tax) / bill.users.length).toFixed(0)

export const usersPercentage = (users) => {
  let objects = [];
  for (var x = 0; x < users.length; x++) {
    let obj = {
      [users[x]]: '',
      name: users[x],
      percentage: 0
    }
    objects.push(obj);
  }
  return objects
}