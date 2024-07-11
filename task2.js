function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
   }
   
   
   function fetchAnotherResource() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
   }
   
   
   function fetchAllData() {
    return Promise.all([fetchTodo(), fetchAnotherResource()])
      .then(results => {
        const [todo, user] = results;
        return { todo, user };
      })
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
   }
   
   
   fetchAllData()
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
   