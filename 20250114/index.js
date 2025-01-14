const hello1 = "Hello"
const hello2 = "HelLO"
const hello3 = "HelLO    "
const arrayInStr = "a;b;c;d";
'Hello'.includes('ell'); // true
// console.log('Hello World World'.replaceAll('World', 'JavaScript')); // 'Hello JavaScript'
// console.log('Hello'[0])
// console.log('Hello'.indexOf('d'))
// console.log(arrayInStr.split(';').join(';'))
// console.log(hello1 === hello2)
// console.log(hello1.toLowerCase() === hello2.toLowerCase())
// console.log(hello3.trim())

Math.random();
Math.round(4.7); // 5
Math.max(1, 3, 5); // 5
Math.sqrt(16); // 4


let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]

arr.shift(); // [2, 3]
arr.unshift(1); // [0, 2, 3] , [2, 3] --> [  2, 3]

// [1,2,3] => [f(1, idx), f(2, idx), f(3, idx)]
const f = (x, idx) => {return `${x}:${idx}`}
const newArr = arr.map(f)

// [1,2,3] => [f(1, idx) === true ? 1 : (), f(2, idx), f(3, idx)]
const isOdd = (x) => x % 2 === 1
const filterArr = arr.filter(isOdd).map(f)

const users =  [{ name: "Thurai", age: 20},
    { name: "Henry", age: 30},
    { name: "Richard", age: 29},
    { name: "David", age: 42}]
const findYoungerThan20 = (x) => x.age < 20;
// console.log(users.filter(findYoungerThan20));
// console.log(users.find(findYoungerThan20));

const serverConfig = {
    date: 20250114,
    time: "9:12pm",
    name: "server1",
    isActives: true,
    isRunning: true,
    owner: "payments"
}

const {isActive} = serverConfig;
const [one, second, third, fourth] = [1,2,3];


console.log(serverConfig.isActive, isActive)
console.log(one, fourth)



