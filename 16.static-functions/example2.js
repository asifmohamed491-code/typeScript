"use strict";
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        return age >= 18;
    }
}
// const user = new User('alice',30);
// console.log(user.isAdult())
console.log(User.isAdult(30), '30');
console.log(User.isAdult(15), '15');
