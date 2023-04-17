///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(((runningTotal, curr) => runningTotal + curr.price), 0); 
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(sum, couponValue, tax){
return cartTotal = ((sum * tax)+sum)-couponValue;
}

console.log(calcFinalPrice(summedPrice, `6`, `.04`)); 

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    // A cart is a virtual or physical shopping basket that stores a user's desired purchases, so that they can shop the entire store, then check out with their purchase once they have made all their selections. If you didn't have a cart, you would have to take each item to the register one by one, so a virtual cart is important for a user to see what they're going to purchase, and for the checkout function to know what to charge the user for and pass along to the other systems that may need that data. In this case, the cart is full of dishes, for the purpose of placing a pick up order. 
    Information the user may need to view their shopping cart and check out: 
    The shopping cart page needs: 
    -Quantity of items ordered
    -Dish information
        - Dish name
        - Dish photo
        - Dish price
        - Whether or not the dish is eligible for a coupon and which ones
        - The quantity of the dish ordered 
        - Any customizations requested
    -Subtotal
    -Tax (the location of the restaurant was already known so tax could be calculated)
    -Estimated Final Total (coupon will be added on next page)
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const dishInfo = [
    {
    dishName: `Chicken Parmesan`, 
    dishPhoto: `https://www.photoCDN.com/120922`, 
    dishPrice: `12.99`, 
    discounts: `SPRING23, STUDENT23`, 
    quantity: `3`, 
    customization: `No cheese`
    }
]
