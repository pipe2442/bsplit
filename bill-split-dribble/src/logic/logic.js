export const deleteItem = (menu, index) => {
    menu.splice(index, 1)
    return menu
  }
  
  export const addValues = (bill) => {
    return bill.map((a) => (a.price * a.quantity)).reduce((a, b) => a + b, 0).toFixed(2)
  }
  
  export const findTax = (tip, total) => (total * tip / 100).toFixed(2)
  
  export const equalDivision = (final, users) => (final / users).toFixed(2)
  
  export const usersPercentage = (users) => {
    let objects = [];
    for (var x = 0; x < users; x++) {
      let obj = {
        index: x,
        percentage: 0
      }
      objects.push(obj);
    }
    return objects
  }

  export const finalSum = (total, tax) => (Number(total) + Number(tax)).toFixed(2)

  export const dishTotal = (price, quantity) => (price * quantity).toFixed(2)

  export const customPer = (final, percentage) => ((final* percentage)/100).toFixed(2)