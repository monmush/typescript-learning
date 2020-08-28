const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number) => {
  return a - b;
};

function devide(a: number, b: number): number {
  return a / b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

const log = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

//Destructuring with annotations
const todayWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  // something
};

const profile = {
  age: 20,
  setAge(age) {
    this.age = age;
  },
  coords: {
    longitude: 12,
    latitude: 10,
  },
};

const {
  coords: { longitude, latitude },
}: { coords: { longitude: number; latitude: number } } = profile;
