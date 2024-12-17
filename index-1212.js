// DATATYPE
// - number, string, boolean, array, ~ object

// syntax || semantics

// FUNCTIONS
// function definition
// function declaration
function whileLoop(numberInputTwo) {
    while(numberInputTwo < 10) {
        if (numberInputTwo === -8) {
            return numberInputTwo;
        }

        numberInputTwo++;
        console.log(numberInputTwo);
    }
}


function isNumberOneBiggerThanNumberTwo( numberInputTwo) {
    for (let i = numberInputTwo; i < 10; i++) {
        if (numberInputTwo === -8) {
            break;
        }
        numberInputTwo++
        console.log(`i value = ${i}, numberInputTwo value ${numberInputTwo}`)
    }
    return numberInputTwo
}


const output = isNumberOneBiggerThanNumberTwo(5);
console.log(`This is console value ${output}`);





// Print first 5 even number starting from 1;


// SCOPE
// OBJECT + PROTOTYPE
