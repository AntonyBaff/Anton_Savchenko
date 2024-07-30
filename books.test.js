const axios = require('axios')

test ("GET BookStore/v1/Books status 200", async() => {
    const response = await axios.get('https://demoqa.com/BookStore/v1/Books')
    expect(response.status).toBe(200);
});

test ("GET BookStore/v1/Books response data", async() => {
    const response = await axios.get('https://demoqa.com/BookStore/v1/Books')
    expect(response.data.books).toBeDefined();
});

test ("GET BookStore/v1/Books length", async() => {
    const response = await axios.get('https://demoqa.com/BookStore/v1/Books')
    expect(response.data.books).toHaveLength(8);
});

test ("POST BookStore/v1/Books status 201", async () => {
    const userBook = {
        code: "4314",
        isbn: "6546546"
    };
    const response = await axios.post('https://demoqa.com/BookStore/v1/Books', userBook)
    expect(response.status).toBe(201);
});

test ("POST BookStore/v1/Books status 400", async () => {
    const userBook = {
        "code": 0,
        "message": "Example"
    };
    const response = await axios.post('https://demoqa.com/BookStore/v1/Books', userBook)
    expect(response.status).toBe(400);
});