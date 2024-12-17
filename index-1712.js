// JAVASCRIPT

const CarStatic = {
    brand: "Honda",
    model: "Civic",
    year: 2024,
    start: function(sound) {
        console.log(`Starting...${sound}`)
    }
}

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.start = function(sound) {
        console.log(`Starting...${sound}`)
    }
}


const civic = new Car("Honda", "Civic", 2024);
const camry = new Car("Toyota", "Camry", 2024);
console.log(`${civic.brand}(${civic.model}) - ${civic.year}`);
console.log(`${camry.brand}(${camry.model}) - ${camry.year}`);



// ------------------------------------------------------------------

// const Me = {
//     first: "Thurairaj",
//     last: "Letchumananan",
//     work: "Setel",
//     greetings: function() {
//         console.log(`Hello`)
//     }
// }


function Person(first, last, work) {
    this.firstName = first;
    this.lastName = last;
    this.work = work;
    this.greetings = function() {
        console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
    }
}

const me = new Person("Thurairaj", "Letchumanan", "Setel");
const henry = new Person("Thiery", "Henry", "CBC");

Person.prototype.sayHello = function() { console.log("hello")}

const watson = new Person("Emma", "Watson", "Harry Potter");

me.sayHello()
henry.greetings()
watson.sayHello()

Number.prototype.isEven = function() {
    return this.valueOf() % 3 === 0
}


const four = 3
console.log(four.prototype)

// const name = value
// logical > < === !
//  if (logical condition) statement else {}
// function functionName(arg, arg1) {
//  if(){}
// }

// while loop
// for loop

// while ( logical condition is true ) { break; }
// for ( assignment stmt; conditional stmt; arithmatic operation) {}


// 0 1 1 2 3 5 8 13

// n - 1 = 1
// n - 2 = 1


function fibonacciSeq(nthNumber) {
    let nMinusOne = 1;
    let nMinusTwo = 0
    let count = 2;
    let currentValue = 0;

    if (nthNumber < 1) {
        return -1;
    } else if (nthNumber === 1) {
        return nMinusTwo;
    } else if (nthNumber === 2) {
        return nMinusOne;
    }

    while(count < nthNumber)  {
        currentValue = nMinusOne +nMinusTwo;

        nMinusTwo = nMinusOne;
        nMinusOne = currentValue;

        count++;
    }
    return currentValue;
}

console.log(fibonacciSeq(1))
console.log(fibonacciSeq(2))
console.log(fibonacciSeq(3))
console.log(fibonacciSeq(4))
console.log(fibonacciSeq(5))
console.log(fibonacciSeq(6))
console.log(fibonacciSeq(7))
console.log(fibonacciSeq(8))


