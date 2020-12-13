// triangular testing
function orderTotal(order) {
  return order.items.reduce(
    (prev, cur) => prev + cur.price * (cur.quantity || 1),
    0
  );
}

if (
  orderTotal({
    items: [
      { name: "Apple", price: 100 },
      { name: "Orange", price: 200 },
    ],
  }) !== 300
) {
  throw new Error("Check fail at orderTotal");
}
if (
  orderTotal({
    items: [
      { name: "Apple", price: 110 },
      { name: "Orange", price: 40 },
    ],
  }) !== 150
) {
  throw new Error("Check fail at orderTotal");
}

if (
  orderTotal({
    items: [{ name: "Apple", price: 20, quantity: 10 }],
  }) !== 200
) {
  throw new Error("Quantity check fails");
}
