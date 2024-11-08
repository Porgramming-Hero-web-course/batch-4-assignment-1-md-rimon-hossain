# Why are Type Guards Necessary? 
## Why Type Guards Are the Bodyguards of Your Code 🛡️ :

Type guards in TypeScript allow you to determine the type of a variable at runtime.And way to narrow down the type of a variable within a specific block of code. This is particularly helpful when working with union types, as it enables you to write code that is safe, specific, and clear. Here, we'll cover three common type guards: `typeof`, `in`, and `instanceof`, along with examples.

### Types of Type Guards
### 1. `typeof` Type Guard
The `typeof` type guard is used to check the type of primitive values, like `string` or `number`. It’s ideal for simple types and is commonly used in functions that accept union types.

#### Example:
```typescript
function addAndPrint(param1: string | number, param2: string | number) {
  if (typeof param1 === "number" && typeof param2 === "number") {
    console.log(`The sum is: ${param1 + param2}`);
  } else if (typeof param1 === "string" && typeof param2 === "string") {
    console.log(`The concatenated string is: ${param1 + param2}`);
  } else {
    console.log("Both parameters need to be either numbers or strings.");
  }
}

addAndPrint("abc", "def");   // Output: The concatenated string is: abcdef
addAndPrint(100, 100);  // Output: The sum is: 200
addAndPrint("abc", 200);  // Output: Both parameters need to be either numbers or strings.

```
In this example, If both param1 and param2 are numbers, the function adds them and to print the result .If both are strings, it concatenates them.If the types of param1 and param2 don’t match (example, one is a string and the other is a number), it outputs a message indicating that both parameters need to be of the same type.

### 2. `in` Type Guard
The `in` operator is used to check if an object has a specific property. It’s helpful for telling apart different types of objects, especially when those types have different sets of properties. This makes it useful when working with objects that share some properties but also have unique ones,

#### Example:
```typescript
type Admin = { name:string, role: string; };
type User = { name:string };

function getIdentifyUser(person: Admin | User) {
  if ("role" in person) {
    console.log(`${person.name} is an user and his Role is: ${person.role}`);
  } else {
    console.log(`He is a general User: ${person.name}`);
  }
}

const admin: Admin = {name:"Next Level Developer", role: "Admin" };
const user : User = { name: "GeneralUser" };

getIdentifyUser(admin); // Output: Next Level Developer is an user and his Role is: Admin
getIdentifyUser(user);  // Output: He is a general User : GeneralUser
```
In this example, we check if the role property exists in person. If it does, person is considered an Admin; otherwise, it’s a General User.

### 2. `instanceof` Type Guard
The `instanceof` type guard helps you tell the difference between objects created from different classes. It checks if an object belongs to a specific class, which is useful when working with object-oriented code in TypeScript.

#### Example:
```typescript 
 // Base class Person
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getSleepHours(sleepHours: number) {
    console.log(`${this.name} gets ${sleepHours} hours of sleep every day.`);
  }
}

// Student subclass extending Person
class Student extends Person {
  roll: number;

  constructor(name: string, age: number, roll: number) {
    super(name, age);
    this.roll = roll;
  }

  doingAssignment() {
    console.log(`${this.name} is doing an assignment and their roll number is ${this.roll}.`);
  }
}

// Teacher subclass extending Person
class Teacher extends Person {
  designation: string;

  constructor(name: string, age: number, designation: string) {
    super(name, age);
    this.designation = designation;
  }

  takingClass(subject: string) {
    console.log(`${this.name} teaches a ${subject} class every day.`);
  }
}

// Instances
const student1 = new Student("Rimon Hossain", 20, 222);
const teacher1 = new Teacher("Lalu Mya", 20, "Professor");

// Type Guards
const isStudent = (person: Person): person is Student => {
  return person instanceof Student;
};

const isTeacher = (person: Person): person is Teacher => {
  return person instanceof Teacher;
};

// Function to Use Type Guards
const getPerson = (person: Person) => {
  if (isStudent(person)) {
    person.doingAssignment();
  } else if (isTeacher(person)) {
    person.takingClass("Math");
  } else {
    console.log(`${person.name} is a general person.`);
  }
};

// Testing
getPerson(student1); // Output: Rimon Hossain is doing an assignment and their roll number is 222.
getPerson(teacher1); // Output: Lalu Mya teaches a Math class every day.
```
In this example, isStudent and isTeacher are functions that use instanceof to check the specific class of a Person instance. This let us safely access properties unique to each class.

