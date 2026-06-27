"use strict";
//  with inhertance
class Person {
    firstName;
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greetUser() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return this.age;
    }
}
class User extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
    }
}
class Admin extends Person {
    role;
    constructor(firstName, lastName, age, role) {
        super(firstName, lastName, age);
        this.role = role;
    }
    greetUser() {
        return `Hello ${this.firstName} ${this.lastName}, Role:${this.role}`;
    }
    manageUsers() {
        return `Managing users with role ${this.role}`;
    }
}
let user1 = new User('John', 'Doe', 25);
let admin1 = new Admin('Alice', 'Smith', 35, 'Administrator');
console.log(user1.greetUser());
console.log(user1.getAge());
console.log(admin1.greetUser());
console.log(admin1.getAge());
console.log(admin1.manageUsers());
