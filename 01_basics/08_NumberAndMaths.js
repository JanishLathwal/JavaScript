const balance= new Number(100)
console.log(balance)

// can convert a number to string
console.log(balance.toString());

console.log(balance.toString().length);

// can give upto how many decimal places we want a no
console.log(balance.toFixed(3))

// something like round-off
let other = 1234.1299
console.log(other.toPrecision(6));

console.log(other.toLocaleString('en-IN'));

// *********************** MATHS **************************

console.log(Math);
console.log(Math.abs(-(-(-5))));
console.log(Math.round(22.5));

// ceilk woll always give upper value!
console.log(Math.ceil(22.49));

// floor will always give lower value!
console.log(Math.floor(22.49));

console.log(Math.min(22.49,25,0,-100,-102));

// random will give value b/w 0-1
console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min=10;
const max=20;

// this will gove ud the value between max and min!
console.log(Math.floor(Math.random()*(max-min+1))+min);




