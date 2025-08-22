import { Person } from "./Person";
export class Student extends Person{
    Graden: String;

    constructor (Name: String, Age: Number, Graden: String){
        super(Name,Age);
        this.Graden = Graden;
    }
    display(): void{
        console.log(`Name: ${this.Name}, Age: ${this.Age}, Graden: ${this.Graden}`);
    }
    
}