//for no.1
undefined
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
const lastAge = ages[ages.length - 1];               // for the last element
ages.push(42);                                       // to a new age (42) in the array

const firstAge = ages[0];
const ageDifference = lastAge - firstAge;
console.log("Age difference:", ageDifference);
                                                    let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}

const averageAge = sum / ages.length;

console.log("Last age:", lastAge);

console.log("Average age:", averageAge);

VM1331:7 Age difference: 90
VM1331:15 Last age: 93
VM1331:17 Average age: 30.22222222222222
undefined
//for no.2
undefined
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
console.log("Average letters per name:", averageLetters);                                     
const averageLetters = totalLetters / names.length;

const concatenatedNames = names.join(' ');


console.log("Concatenated names:", concatenatedNames);

VM1391:7 Average letters per name: 3.8333333333333335
VM1391:13 Concatenated names: Sam Tommy Tim Sally Buck Bob
undefined
