interface Movable {
  move(): void;
}

class CarMovable implements Movable {
  move(): void {
    console.log('Car is moving on the road');
  }
}

class RobotMovable implements Movable {
  move(): void {
    console.log('Robot is walking forward');
  }
}

const carM: Movable = new CarMovable();
carM.move();

const robotM: Movable = new RobotMovable();
robotM.move();