class Student {
  constructor(public name: string, public grade: number) {}
}

class Teacher2 {
  constructor(public name: string, public subject: string) {}
}

class School {
  private students: Student[] = [];
  private teachers: Teacher2[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher2): void {
    this.teachers.push(teacher);
  }

  displayInfo(): void {
    console.log('=== School Info ===');
    console.log('Students:');
    this.students.forEach((s) => console.log(`- ${s.name}, Grade: ${s.grade}`));
    console.log('Teachers:');
    this.teachers.forEach((t) =>
      console.log(`- ${t.name}, Subject: ${t.subject}`)
    );
  }
}

const school = new School();
school.addStudent(new Student('John', 10));
school.addStudent(new Student('Emma', 11));
school.addTeacher(new Teacher2('Mr. Brown', 'Science'));
school.addTeacher(new Teacher2('Ms. Green', 'English'));
school.displayInfo();