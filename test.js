// GET
fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'GET', // GET, POST, PUT, DELETE // Opcional
    // body: "", // POST, PUT
    headers: {
        'Content-Type': 'application/json'
    }
}).then((response) => {
    console.log(response);

    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})