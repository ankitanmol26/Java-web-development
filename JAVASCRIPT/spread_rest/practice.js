//Create a copy using spread.
const fruits = ["Apple", "Banana", "Mango"];
const copy=[...fruits];
console.log(copy);

//create fullstack with both arrays
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Java", "Spring Boot", "PostgreSQL"];
const fullstack = [...frontend,...backend];
console.log(fullstack);

//add 40 without push()
const numbers = [10, 20, 30];
const updateNumber = [...numbers,40];

//update the age
const student = {
    name: "Anmol",
    age: 19,
    branch: "CSE"
};

const upadteStudent={
    ...student,
    age:20,
}

//add springboot in the skills
const user = {
    name: "Anmol",
    skills: ["Java", "React"],
    address: {
        city: "Hyderabad"
    }
};

const updateUser={
    ...user,
    skills:[...user.skills,"spring boot"]
}

//rest example
function add(...numbers){
    return numbers.reduce((sum,number)=>{
        return sum+number;
    },0);
}
console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15, 20));
