//CONSTRUCTOR FUNCTIONS
/*function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

}
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {


    return `${this.firstName} ${this.lastName}`;
}*/


//CREATING A CLASS
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();

    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//INSTANTIATE AN OBJECT
const person1 = new Person('Daniel', 'Ddungu', '1-28-1993');
const person2 = new Person('Julie', 'Kanoweli', '3-6-1991');

console.log(person2.getFullName());
console.log(person2);