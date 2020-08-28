const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

//Help with interference when extracting value
const myCar = carMakers[0];
const myCar1 = carMakers.pop();

//Prevent in-compatible value
// carMakers.push(100); //gonna throw err

//Help with "map"
carMakers.map((car: string) => {
  return car;
});

//Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push("20-02-2020");
importantDates.push(new Date());
