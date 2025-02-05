var name = "仲冶";
console.log(name);
console.log(window.name);

for (let i = 0; i < 5; ++i) {
    console.log(i);
}

for (var i = 0; i < 5; ++i) {
    setTimeout(() => console.log(i), 0);
}

for (let i = 0; i < 5; ++i) {
    setTimeout(() => console.log(i), 0);
}

let interpolatedString = 'zy' + 'is' + 'handsome';
console.log(interpolatedString);

let value = 5;
let exponent = 'second';
let sumstring = 
    `${value} to the ${exponent} power is ${ value * value}`;
console.log(sumstring)