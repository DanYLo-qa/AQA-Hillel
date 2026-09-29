const person = {
    firstName: "Agatha",
    lastName: "Christie",
    age: "25"
}

const person1 = {...person, email:"agatha@test.com"};

delete person1.age;


console.log(person1);