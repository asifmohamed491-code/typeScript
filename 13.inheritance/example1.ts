// without inheritance
class User {
    firstName: string;
    lastName: string;
    age: number

    constructor(firstName: string, lastName: string, age: number) {
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

// Admin class
class Admin {
    firstName: string;
    lastName: string;
    age: number;
    role: string


    constructor(firstName: string, lastName: string, age: number, role: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.role = role;
    }

    greetUser() {
        return `Hello ${this.firstName} ${this.lastName}, Role:${this.role}`;
    }
    getAge() {
        return this.age;
    }

    manageUsers(){
        return `Managing users with role ${this.role}`;
    }

}

let user1 = new User('John','Doe',25);
let admin1 = new Admin('Alice','Smith',35,'Administrator');


console.log(user1.greetUser());
console.log(user1.getAge());


console.log(admin1.greetUser());
console.log(admin1.getAge());
console.log(admin1.manageUsers());