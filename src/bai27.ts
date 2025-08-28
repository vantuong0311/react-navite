class Person {
  constructor(public name: string, public age: number) {}
  
  introduce(): void {
    console.log(`Hi, I am ${this.name}, ${this.age} years old.`);
  }
}

class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }

  introduce(): void {
    console.log(`Hi, I am ${this.name}, I teach ${this.subject}.`);
  }
}

const teacher = new Teacher("Alice", 30, "Math");
teacher.introduce();