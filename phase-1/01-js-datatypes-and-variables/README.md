# Data Types and Variables

### SWBAT:

- Review JS Data Types
- Explain the effect let and const has on scope and variable declarations and assigning
- Demonstrate understanding of scope in JavaScript
- Review JS Conditionals

```txt
05 min - Introduction
05 min - The Set up
05 min - The Console
05 min - Debugging
05 min - Warm Up
20 min - Segment 1: Review Data Types
10 min - Break
20 min - Segment 2: Variables and Conditionals
10 min - Check for Understanding
10 min - Go over global and block scope
10 min - Questions
05 min - Exit Ticket
---
120 min
```

### Introduction - (5 minutes)

Introduce students to the lecture style. Here we can discuss classroom etiquette. Make students feel comfortable and build a positive culture for learning. Encourage students to be present and participant in their learning experience. Provide students with a repository and go over git flow to provide context on how to utilize repositories. Go over best practices for following along lectures. Allow students the option to code along however discuss the pros and cons of missing information if student becomes stuck on an error while coding along.

### Warm Up - (5 minutes)

What are the different data types we can work with in JS?

```
8 basic data types in JS:
String
Number
Boolean
BigInt - A BigInt number is created by appending n to the end of an integer
Object
Symbols
Null
Undefined
```

### The Set up - (5 minutes)

Take a second to go over our file structure.
Lightly touch on how our JavaScript file is being rendered by our script tag in our index.html. We are going to be playing around in the console so we shouldn’t need a deep dive into the DOM yet.

### The Console - (5 minutes)

Open up your dev tools and give a quick tour, touching on the element and network tabs but mostly focus on the console.

Encourage students to play around in the console by test out some code. Its a good time to do a quick review of some primitive types and operations.

### Debugging - (5 minutes)

Debugging is most of development, our lectures should have a number of built in bugs to help students familiarize themselves with their tools. It's also important to encourage a culture of error. Anytime you as a lecture run into a bug, use it as a teaching opportunity. Encourage being wrong and not knowing the answer, but knowing how to problem solve and get to a solution.

`Errors`, `Console.log` and `debugger` are our new best friends.

Console:
Go over console in dev tools and discuss gotcha's in console's i.e variable redeclarations allowed. Best practice to code in JS file and run files in console.

### Segment 1: Data Types

Go over examples of the different JS data types

#### Strings

Go over the different ways of writing a string.

```
"Using double quotation marks"
'Using single quotation marks'
`Using backticks so we can ${interpolate}`
```

#### Numbers

Review some examples of numbers

```
integers
floats
NaN
```

#### Booleans

Make sure that students know truthy and falsy values are booleans.

Identify things in JS that will return false

```
0
NaN
undefined
false
null
""
```

Point out that everything else is true

#### Using typeof

```
console.log(typeof undefined) => undefined
console.log(typeof true) => boolean
console.log(typeof Symbol("name")) => symbol
```

#### Primitive vs non-primitive data types

What is a primitive data type?

```
A datatype that can only store a single piece of data
```

Of the data types we went over, which is not considered a primitive data type and why?

```
Object because it can store collections of data
```

#### Operating on Data Types & gotchas

```txt
What to use to assign values: `x = y (assignment)`
what is happening in this statement: `x += y addition assignment`
Performing addition on data types: `1 + 1 returns 2`
why is this happening? `"1" + 1 returns 11`
`3 == '3' returns true` Discuss that JS engine coerces values to string for comparison
`3 === '3' returns false` Strict equals, should always use this for comparisons
`x = 3: ++x returns 4`
`x++ returns 3`
`console.log("" == "0")` returns false, why?
are undefined and null the same?
```

### Segment 2: Variables and Conditionals

#### Variables

Ask students what variables are and why they think they are useful

```
Variables are named storage for data
Allow us to store data and reference the data later
```

Let vs Const

Ask students to identify key differences between let and const:

```
can declare `let` without initialization
`let` can be reassigned
```

Ask students to give good use cases for let vs const

```
A great example here is a likes counter since the value of a counter is expected to change.

let likes = 0
likes = likes += 1
console.log(likes)

vs

const likes = 0
likes = likes += 1
console.log(likes)
```

Ask students to think about best variable naming practices

```
Variables shouldn't start with numbers
Using camelcasing
Variables should start with a letter
Variables should not contain spaces
Can not use reserved words
```

Ask students to identify reasons why the following variables are not best practice

```
let pokemonname = 'Meowth'
let function = 'Render Pokemon' 
=> Uncaught SyntaxError: Unexpected token 'function' / reserved key
```

Reading Errors

```
console.log(pokemon)
ReferenceError: pokemon is not defined

let test pokemon = "Jigglypuff"
SyntaxError: Unexpected identifier

let img = "www.pokeimg.com"
let img = "www.pokedeximg.com"
SyntaxError: Identifier 'img' has already been declared

const likes = 0
likes = 1
TypeError: Assignment to constant variable.
```

#### Conditionals

Practice writing a conditional with help of students.

Create two variables, `pokemon` and `likes`
Set pokemon equal to a character
Set likes equal to one

If there is only 1 like, console.log 'Character has 1 like'
Else dynamically return number of likes and console.log 'Character has <num> likes`

```
let pokemon = "Voltorb"
let likes = 1 

if (likes === 1) {
    console.log(`${pokemon} has 1 like`)
} else {
    console.log(`${pokemon} has ${likes} likes`)
}

Ask students what they assume will happen if the number of likes is 0 

```
Rewrite the same conditional only this time add a third condition that checks if the num of likes is 0 then console.log 'Character has no likes'

```
let pokemon = "Voltorb"
let likes = 3 

if (likes === 1) {
    console.log(`${pokemon} has 1 like`)
} else if (likes > 1) {
    console.log(`${pokemon} has ${likes} likes`)
} else {
    console.log(`${pokemon} has no likes`)
}
```

Write a conditional statement that performs an additional assignment to 1 if the num of likes is 0 and increments the num of likes if it is not.

```
likes === 0 ? likes += 1 : ++likes

console.log(likes)
```

#### Scopes

Global Scope

Touch on how data in the global scope is accessible through the program. Global scope belongs to the window

`let character = "Chewbacca";`

Block Scope

In the following example, allow students to identify why the following error is being returned
Move console.log to end of code and point out that it still returns an error. 

```
console.log(pokemon)
if (true) {
    let pokemon = "Charmeleon"
}
ReferenceError: pokemon is not defined
```

Ask students what to expect with the following code and why it is still returning the value of the variable

```
if (true) {
    pokemon = "Metapod"
}
console.log(pokemon)
```
