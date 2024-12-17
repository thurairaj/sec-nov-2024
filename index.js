// PRIMARY DATATYPES
// number
// string
// boolean

const firstName = 140
const lastName = "Letchumanan"
const error = "This is an error!"
const isMyNameThurairaj = false;
const isMyNameLetchumanan = true;

let x = 22;
let y = x;
x = 3
// x = x0001 => [1][0]
// y = x0002 => [1][0]

//console.log(`x : ${x}, y: ${y}`)


const isXBiggerThan2 = false  ;
const isXEqualTo2 = x === 2;

if (isXBiggerThan2) {
    //console.log(`${x} bigger than 2`);
} else if(isXEqualTo2) {
    //console.log(`${x} equals to 2`);
} else {
    //console.log(`2 bigger than ${x}`);
}

//------------------------------------------

// REFERENCE DATA TYPE
// array ==> x0001
// copyArray ==> x0001
// x0001 => [3, 2, 1]
let array = [3, 2, 4,5,6,7,8,9];
let copyArray = array;
array[0] = 1;
array[1] = "string"
array[2] = true
array[3] = "sing along"
console.log(array)
console.log(copyArray)


const hashMap = new Map()
hashMap.set("myCustomObj", 1);
console.log(hashMap.has("jewiofwo"))

// Object
const People = {
    name: "Thurairaj",
    age: 5,
    incrementAge: (x) => { People.age = People.age + x}
}

console.log(`${People.name} is ${People.age} age`);
People.incrementAge(2);
console.log(`Increment ${People.name}'s age to ${People.age} `);

// ----------------------------------
// FUNCTION
function isBiggerThan2(argument1) {
    const value = argument1 + 20;
    return value > 10;
}

console.log(isBiggerThan2(-20));
console.log(isBiggerThan2(1.2));
console.log(isBiggerThan2(3));
