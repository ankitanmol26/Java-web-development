const student={
    name:"anmol",
    age:"19",
    branch:"cse",
    college:"hitam"  

};

console.log({name , age , branch , college}=student);

const{name:studentName, age:studentAge , branch:studentBranch , college:studentCollege}=student;

console.log(studentName,studentAge,studentBranch,studentCollege); 

const marks = [85, 90, 78, 92];
const [maths, physics, chemistry, english] = marks;
console.log(maths,  chemistry, );

const product = {
    name: "Laptop",
    price: 75000,
    category: "Electronics"
};
const {name: productName, price: productPrice, category: productCategory} = product;
console.log(productName, productPrice, );

const user = {
    name: "Ankit",
    age: 21,
    address: {
        city: "Hyderabad",
        pincode: 500001
    }
};

const {name, age , address: {city, pincode}} = user;
console.log(name, age, city, pincode);

