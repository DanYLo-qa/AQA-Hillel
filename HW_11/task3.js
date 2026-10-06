async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data= await response.json();
    return data;
}

async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json();
    return data;
}

const all = Promise.all([fetchTodo(), fetchUser()])
.then(([todo, user]) => {
    console.log('Todo:', todo);
    console.log('User:', user);
})
.catch(error =>{
    console.log('error', error);
})

const race =  Promise.race([fetchTodo(), fetchUser()])
.then (firstResult => {
    console.log('first response', firstResult);
})
.catch(error =>{
    console.log('error', error);
})