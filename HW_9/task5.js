
const users =[
    {name: "John", email: "john@test.com", age: "15"},
    {name: "Malcolm", email: "malcolm@test.com", age: "25"},
    {name: "Katrin", email: "katrin@test.com", age: "20"},
    {name: "Rosa", email: "rosa@test.com", age: "17"},
]

for (const {name, age, email} of users){
    console.log(`${name} is ${age} years old, email is ${email}` );
}
