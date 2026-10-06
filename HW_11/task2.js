function fetchTodo(){
    return fetch ('https://jsonplaceholder.typicode.com/todos/1')
.then(response => {
    return response.json();
})
.catch(error => {
    console.log(" error", error);
});
}


function fetchUser(){
    return fetch ('https://jsonplaceholder.typicode.com/users/1')
.then(response => {
    return response.json();
})
.catch(error => {
    console.log(" error", error);
});
}

 const arr= Promise.all([fetchTodo(), fetchUser()])
 .then(([todo, user]) =>{
    console.log('Todo:', todo);
    console.log('User', user);
 })
 .catch(error =>{
    console.log('Error', error);
 })

 const race =Promise.race([fetchTodo(), fetchUser()])
 .then(firstResult =>{
    console.log('first response', firstResult);
 })
 .catch(error =>{
    console.log('error', error);
 })