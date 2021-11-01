//CONDITIONAL STATEMENTS
const X = 10;
if (X == 10) {
    console.log('X is 10');
} else {
    console.log('X is not equal 10');
}


//TO CHECK DATA TYPES
const Y = 20;

if (Y === 10) {
    console.log('Y IS 10');
} else {
    console.log('Y is not 10');
}

//SHORT HAND UF STATEMENT USED TI ASSIGN VARIABLES BASED ON THE CONDITION

const x = 10;

const color = x > 10 ? 'red' : 'blue';
console.log(color);


//SWITCHES
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or Blue');
        break;
}