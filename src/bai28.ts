class AnimalBase {
  protected makeSound(): void {
    console.log('Some generic animal sound');
  }

  public sound(): void {
    this.makeSound();
  }
}

class DogAnimal extends AnimalBase {
  protected makeSound(): void {
    console.log('Dog barks');
  }
}

class CatAnimal extends AnimalBase {
  protected makeSound(): void {
    console.log('Cat meows');
  }
}

const dogA = new DogAnimal();
dogA.sound();

const catA = new CatAnimal();
catA.sound();