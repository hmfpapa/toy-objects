const toys = 
[
 {id: 1,
    name: "teddy bear",
    maker: "Bill",
    cost: 5.25,
    price: 15,
    inStock: true
},
{id: 2,
    name: "popper",
    maker: "Bob",
    cost: .75,
    price: 5,
    inStock: false
},
{id: 3,
    name: "cards",
    maker: "Bud",
    cost: 1,
    price: 7,
    inStock: true
}
]
console.log(toys)
for (const toy of toys){console.log(`Name is ${toy.name}`)}
const truck = {
    id: 4, 
    name: "truck",
    maker: "Bill",
    cost: 10,
    price: 25,
    inStock: true
}
const puzzle = {
    id: 5,
    name: "puzzle",
    maker: "Bud",
    cost: 4.5,
    price: 12,
    inStock: true
}
toys.push(truck)
toys.push(puzzle)
console.log(toys)
for (toy of toys){
    toy.price = toy.price * 1.05
}

for (toy of toys){
    console.log(`The ${toy.name} made by ${toy.maker} costs ${toy.price} dollars`) 
}

for (toy of toys){
    if (toy.price < 10){console.log(`${toy.name} is a bargain!`)
}}