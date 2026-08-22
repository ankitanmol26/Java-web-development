array is a method to store data of similar datatypes.

array methods
push()
pop()
unshift()-it adds the element in the begginnig
shift()-removes the element
join()-adds all the element in to the string


slice() - gives the array from where u want. it doesnot give the last element
=> it doesnot manipulate orginial array
ex: arr=[1,2,3,4,5]
arr.slice(0,2) -- gives [1, 2 ]

splice()- same as slice but it gives the last element
=> it manipulates the original array
ex: arr=[1,2,3,4,5]
arr.splice(0,2) -- gives [1, 2 , 3]

concat()- combines the two arrays and create new one
instead concat we use spread[...].
---------------------
we have some methods in array which we use in react as well

forEach() method is used to do something for each item
ex: for printing every element
numbers.forEach((number) => {
    console.log(number);
});
--------
map() - method is used when you want to transform every element of a collection/stream into something else. 
ex : for doubling every nimber
const doubled = numbers.map((number) => {
    return number * 2;
});
---------
filter()-method use to filter something 
ex:Now suppose you want only products costing more than ₹10,000.

const products = [
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 30000 },
    { name: "Keyboard", price: 2000 }
];

Use:

const expensiveProducts = products.filter((product) => {
    return product.price > 10000;
});

Result:

[
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 30000 }
]
----------
find()-method used to find
ex:Suppose you need one particular user.

const users = [
    { id: 1, name: "Ankit" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Aman" }
];

Find user with ID 2:

const user = users.find((user) => {
    return user.id === 2;
});

Result:

{
    id: 2,
    name: "Rahul"
}
----------
some()-method checks condition atleast one is there or not
ex:Question:

Does at least one student have marks above 90?

const marks = [65, 72, 94, 81];

const result = marks.some((mark) => mark > 90);

Result:

true
Think:

"Does ANY item satisfy this condition?"
-----------
every()-method use to check is every element with some condition
ex:Question:

Did every student score above 40?

const marks = [65, 72, 94, 81];

const result = marks.every((mark) => mark > 40);

Result:

true

Think:

"Do ALL items satisfy this condition?"
------------
reduce()-method is takes many values and reduces them into one result.
ex:Real E-Commerce Example

Suppose:

const cart = [
    { name: "Laptop", price: 60000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

Calculate total:

const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
}, 0);

Result:

64000

This is real application logic.
=========================================
The Big Four

You should be able to immediately think:

Method	Question
map()	How do I transform every item?
filter()	Which items should remain?
find()	Which one item do I need?
reduce()	How do I combine everything into one result?

And:

Method	Meaning
forEach()	Do something for every item
some()	Does at least one match?
every()	Do all match?

by using arrays we can do many operations