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