class Animal{
    name: string
    constructor (name: string){
        this.name = name
    }
}

class Dog extends Animal{
    back(): void{
        console.log(`${this.name} say : Woof`)
    }
}

class Meo extends Animal{
    meow(): void{
        console.log(`${this.name} say Meowww`)
    }
}

const dog = new Dog("Dog")
dog.back()

var meo = new Meo("Meo")
meo.meow()