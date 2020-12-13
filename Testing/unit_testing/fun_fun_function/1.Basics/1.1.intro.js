/**
 *  code start simple, but when it grows it can't simple, there are so 
 *  many cases cause an error, all cases you can't store in mind, so 
 *  we write test 
 * 
 */

const orderItems = {
    items : [
        {name : "Apple", price: 100},
        {name : "Orange", price : 40}
    ]
}

const totalPrice = orderItems.items.reduce((prev, cur) => cur.price + prev, 0);

console.log(totalPrice);