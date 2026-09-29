const car1 = {
    brand: "Mitsubishi",
    model: "Lancer 1.5i",
    owner: "Matejko",
}

const car2 = {
   brand: "Peugeot",
    model: "308",
    owner: "Goce",
}

const car3 ={...car1, ...car2};

console.log(car3)