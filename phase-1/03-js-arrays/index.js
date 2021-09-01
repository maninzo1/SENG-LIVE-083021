//Arrays- ordered list contain multiple values 
//-each ited in an array is an element
//-collection of related data

//What does array look like; how to we create array; how do we use arrays

//array literal: 
const pokemons = ['pikachu', 'bulbasaur', 'jigglypuff'] // 0,1,2

// //access elements in an array

// console.log(pokemons[1])
// //issues include elements changing inside an array and can access index that doesnt exist

// pokemons[2] = "Jigglypuff"

// console.log(pokemons[2])

// // ADD
// //add elements methods => .push add element to the end of an array 
// pokemons.push("Spearow")
// // unshift add element to the beginning of an array. return value is the length of the array
// pokemons.unshift("Arbok")
// //spread operator (nondestructive), Creates a copy of the original array
// let newPokemons = [...pokemons, "Pikachu"]

// console.log(pokemons === newPokemons) 

// //Removing elements: 
// //.pop will remove and return the last item of an array 
// let lastElement = pokemons.pop()
// //.shift removes the first element, returns it.
// let lastElement = pokemons.shift()
// console.log(firstElement)
// //.slice non destructive return a portion of the array, or a complete copy
// let copyPokemons = pokemons.slice(0,5)
// console.log(copyPokemons) 

// //pass by value: retains original value but will pass the value on. any primitive types
// let x = 2
// function square(num){
//     return num = num * num
// }

// let result = square(x)
// console.log(result)
// console.log(x)

// //pass by reference- any changes made to a reference to the data will be reflected in the original state. non primitive 
// const copyOfPokemons = pokemons
// copyOfPokemons.pop()
// console.log(copyOfPokemons)
// console.log( pokemons) 

// // looping
// //.forEach() step inside the array and deal with each element individually as it looks through the array 

pokemons.forEach(function(character) {
    console.log(character)
})

//.map
pokemons.map(function(character){
    console.log(character.toLowerCase())
})