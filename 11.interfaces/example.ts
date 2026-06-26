interface User1 {
    firstName: string;
    lastName: string;
    middleName?: string;
    age?: number;
}

function greetUser(user: User1) {
    return `Hello ${user.firstName} ${user.lastName}`;
}

function logUserDetails(user: User1) {
    console.log(`User: ${user.firstName} ${user.middleName} ${user.lastName} age: ${user.age}`);
}
let user1 = { firstName: "John", middleName: "francis", lastName: "Doe", age: 25 }
let user2 = { firstName: "JV",lastName: "Logesh"};


console.log(greetUser(user2));
logUserDetails(user1);