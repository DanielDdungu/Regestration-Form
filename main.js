//CONSTRUCTOR FUNCTIONS
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}


//INSTANTIATE AN OBJECT
const person1 = new Person('Daniel', 'Ddungu', '28-01-1993');
const person1 = new Person('Julie', 'Kanoweli', '25-12-1991');
console.log(person1.dob);