import { Person } from "./Person";
import { Student } from "./student";
import { Car } from "./car";
import { Rectangle } from "./Rectangle";
import { BankAccount } from "./BankAccount";
import { Book } from "./Book";
var person = new Person("tuong",20);
console.log(person)

var student = new Student("tuong",20,"A")
student.display();

var car = new Car("mex","tuong",2015)
car.displayCar()

var rectangle = new Rectangle(4,5);
console.log("chu vi la:", rectangle.chuvi())
console.log("dien tich la:", rectangle.dientich())

var account = new BankAccount(1000000);
account.deposit(500);
account.withdraw(1000);

var book = new Book("tiếng việt","Kim Đồng",2010);
book.displayBook()
