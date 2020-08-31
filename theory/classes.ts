class Vehicle {
  constructor(public color: string) {}
  public drive(): void {
    console.log("chugga chugga");
  }
  public honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("red");
vehicle.honk();
vehicle.drive();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); // Call the constructor methods of parent classes
  }
  drive(): void {
    console.log("rhum rhum");
  }
}

const car = new Car(4, "blue");
car.honk();
car.drive();
