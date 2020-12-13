/**
 * 
 *   why use test runners
 *  
 *  vanilla JS test - dry your code
 *  
 *  test runner -
 *          pretty test results
 *          predictable for team
 *          CI integration
 *          auto run
 * 
 *  why jest
 *          established
 *          ready to use
 *          
 */

const orderTotal = require('./order_total');

it("Works", ()=>{
    expect(2+2).toBe(4);
});

it("Order total works (1)", ()=>{
    expect(orderTotal({
    items: [
      { name: "Apple", price: 100 },
      { name: "Orange", price: 200 },
    ],
  })).toBe(300);
});

it("order total works (2)", ()=>{
    expect(orderTotal({
    items: [
      { name: "Apple", price: 110 },
      { name: "Orange", price: 40 },
    ],
  })).toBe(150);
});

it("Quantity Works", ()=>{
    expect(orderTotal({
    items: [{ name: "Apple", price: 20, quantity: 10 }],
  })).toBe(200);
});

