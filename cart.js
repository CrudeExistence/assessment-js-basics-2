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

const totals = 0

const summedPrice = cart.reduce(function (acc, obj) {return acc + obj.price; }, 0)

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

function calcFinalPrice(cartTotal, couponValue, tax) {
    let x = cartTotal;
    x *= (tax+1);
    x -= couponValue;
    return x;
}

// console.log(calcFinalPrice(842,100, 0.07))


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
    TEXT ANSWER HERE
    customer object should contain the following
    name: string value
    I chose name because this gives the customer a way to brand themselves and make sure they have the correct account pulled up. It's easiest if it's a string because that allows for it to be edited as well as the customer to input what they want
    customer id: number value
    This value is likely one that the customer won't see and if it's a number value it's easiest to keep in order when setting up on our side within the programming. 
    address: string
    Addresses are important for delivery as well as advertising and string because I don't see a good way to get this to save otherwise.
    phone number: string
    We need the customer's phone numnber in case anything goes wrong and we need to reach out to them about their order and I decided on string because it can be modified easier and changed into other formats if needed.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

customers = [
    {
        name: "Trever Dudensmurfs",
        customerId: 0001,
        address: "5351 S Fake Street, Fake City FS, 55555",
        phoneNumber: "555-555-5555",
    }
]
