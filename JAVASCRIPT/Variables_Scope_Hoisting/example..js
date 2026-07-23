var age = 30 ;
var age = 69;
// here it prints 69 coz it is var we can change it 
console.log(age);

//let keyword
//it will show as error
function isage(){
let age = 19;
// let age = 49;
// it cannot print the value 
console.log(age)
}
isage();

// const keyword
//it will show as error
function isname(){
    const name = ankit ;
    name = anmol;
    console.log(name);

}
isname();