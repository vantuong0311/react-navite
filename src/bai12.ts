interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Bird implements Flyable {
  constructor(public name: string) {}

  fly(): void {
    console.log(`${this.name} is flying in the sky.`);
  }
}

class Fish implements Swimmable {
  constructor(public name: string) {}

  swim(): void {
    console.log(`${this.name} is swimming in the water.`);
  }
}


const bird = new Bird("BirdLB");
bird.fly();  

const fish = new Fish("Fish");
fish.swim();  