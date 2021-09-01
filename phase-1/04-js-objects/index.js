//What is an object? - a collection of data nested inside {}

const pikachu = {
    //key/value pairs. Keys are properties
    name: 'Pikachu',
    img: 'www.img.com',
    likes: 0
};

// accessing property values is done through bracket or dot notation

console.log(pikachu(['name'])

console.log(pikachu.img)

//. notations is literal 
//can not be used with variables 

function printName(object, property){
    return object{property}
}

printName(pikachu, 'name')

const pikachu = {
    //key/value pairs. Keys are properties
    name: 'Pikachu',
    img: 'www.img.com',
    likes: 0
};
pikachu['color'] = "yellow"
pikachu.powers = "thunderbolt"

//removing powers
delete pikachu.powers

//Best practice for modifying objects

//spread operator
 let newPikachu = {...pikachu, powers:
"thunderbolt"}

//Object.assign()

let copyOfPikachu = Object.assign({}, pikachu)

//looping through object
//for...in

function objLoops{obj}{
    for (const k in obj){
        console.log(obj[k])}
    }
    
}objLoops(pikachu)