"use strict";
// with class
class User {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return this.age;
    }
}
// creating instance  or objects
let user1 = new User('john', 'Doe', 23);
let user2 = new User('jane', 'smith', 35);
console.log(user1.greet());
console.log(user1.getAge());
console.log(user2.greet());
console.log(user2.getAge());
