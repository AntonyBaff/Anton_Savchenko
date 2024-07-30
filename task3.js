/////////////////3.1////////////////////////


async function fetchData(url) {
    try {
        const response = await fetch(url);
        const todo = await response.json();
        return todo;
    }
    catch(error) {
        console.error("Error:", error);
    }
 }
 
 
 const url = "https://jsonplaceholder.typicode.com/todos/1";
 fetchData(url)
 .then(todo => console.log(todo));
 
 
 ///////////////3.2/////////////////////////
 async function fetchData(url2) {
    try {
        const response = await fetch(url2);
        const user = await response.json();
        return user;
    }
    catch(error) {
        console.error("Error:", error);
    }
 }
 
 
 const url2 = "https://jsonplaceholder.typicode.com/users/1";
 fetchData(url2)
 .then(user => console.log(user));
 