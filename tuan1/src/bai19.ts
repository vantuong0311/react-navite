export class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

   
    makeSound(): void {
        console.log(`${this.name} makes a generic animal sound.`);
    }
}


export class Dogg extends Animal {
    constructor(name: string) {
        super(name);
    }

    
    makeSound(): void {
        console.log(`${this.name} says: Woof! 🐶`);
    }
}


export class Catt extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): void {
        console.log(`${this.name} says: Meow! 🐱`);
    }
}