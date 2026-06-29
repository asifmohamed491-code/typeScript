"use strict";
//with class modifiers
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    Name() {
        return this.name;
    }
    getAge() {
        return this.age; //getter methods
    }
    setName(name) {
        this.name = name;
    } //setter method for var assigning new values 
    setAge(age) {
        if (age > 0) {
            this.age = age;
        }
    }
}
const user = new User('Alice', 30);
console.log(user.Name());
console.log(user.getAge());
user.setName('Bob');
user.setAge(-20);
console.log(user.Name());
console.log(user.getAge());
