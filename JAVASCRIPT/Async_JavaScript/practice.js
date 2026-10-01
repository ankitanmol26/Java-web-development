function proceessNumber(number, callback){
    processNumber(10,(number)=>{
        console.log(number * 2);
    })
}

//Create a Promise that:

// resolves "Success!" when success = true
// rejects "Failed!" when success = false
// Handle it using:

// then()
// catch()
const promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("success");
    }else{
        reject("failed");
    }
});
promise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

// Create a Promise that resolves after 2 seconds:

// "Data loaded"

// Then create an async function that uses await to get the result.
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function fetchData() {
    const result = await getData();

    console.log(result);
}

fetchData();

// Use:

// try
// catch

// with your Promise.

// Make it reject and verify that catch receives the error.
async function fetchData(){
    try{
        const result = await getData();
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

// Use:

// fetch("https://jsonplaceholder.typicode.com/users")

// and print the users.

// Use async/await, not .then().

// Your structure should be approximately:

// async function getUsers() {

//     try {

//         // fetch

//         // check response

//         // convert JSON

//         // console.log data

//     } catch (error) {

//         // handle error

//     }

// }

// getUsers();

async function getUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
getUsers();