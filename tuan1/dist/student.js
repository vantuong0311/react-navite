"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(Name, Age, Graden) {
        super(Name, Age);
        this.Graden = Graden;
    }
    display() {
        console.log(`Name: ${this.Name}, Age: ${this.Age}, Graden: ${this.Graden}`);
    }
}
exports.Student = Student;
